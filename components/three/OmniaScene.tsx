"use client";

import {
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  MathUtils,
  MeshPhysicalMaterial,
  Vector3,
} from "three";
import { MarchingCubes } from "three/addons/objects/MarchingCubes.js";
import {
  useEffect,
  useMemo,
  useRef,
} from "react";

const BALL_COUNT = 26;

const SURFACE_SCALE = 5.9;
const CAMERA_DISTANCE = 11.4;

const MIN_BOUND = 0.025;
const MAX_BOUND = 0.975;

type LiquidBall = {
  home: Vector3;
  position: Vector3;
  velocity: Vector3;
  phase: number;
  strength: number;
};

function LiquidMetalBlob() {
    const { size } = useThree();
  const isMobile = size.width < 640;
  const pointerActive = useRef(false);

  const pointerPosition = useRef(
    new Vector3(10, 10, 10),
  );

  const material = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: "#f8fafc",
        metalness: 0.97,
        roughness: 0.018,
        clearcoat: 1,
        clearcoatRoughness: 0.005,
        envMapIntensity: 5.2,
        dithering: true,
      }),
    [],
  );

  const liquidSurface = useMemo(() => {
    const surface = new MarchingCubes(
      80,
      material,
      false,
      false,
      50000,
    );

    surface.scale.setScalar(SURFACE_SCALE);
    surface.position.set(0, 0, 0);
    surface.frustumCulled = false;

    return surface;
  }, [material]);

  const balls = useMemo<LiquidBall[]>(() => {
    return Array.from(
      { length: BALL_COUNT },
      (_, index) => {
        const angle = index * 2.399963;
        const layer = index % 7;

        const radius =
          0.018 + layer * 0.0095;

        const home = new Vector3(
          0.5 + Math.cos(angle) * radius,
          0.5 +
            ((index % 8) - 3.5) * 0.011,
          0.5 +
            Math.sin(angle) * radius * 0.74,
        );

        return {
          home,
          position: home.clone(),
          velocity: new Vector3(),
          phase: index * 0.47,
          strength:
            0.355 + (index % 4) * 0.016,
        };
      },
    );
  }, []);

  const target = useMemo(
    () => new Vector3(),
    [],
  );

  const offset = useMemo(
    () => new Vector3(),
    [],
  );

  const springForce = useMemo(
    () => new Vector3(),
    [],
  );

  const sidewaysForce = useMemo(
    () => new Vector3(),
    [],
  );

  useEffect(() => {
    return () => {
      liquidSurface.geometry.dispose();
      material.dispose();
    };
  }, [liquidSurface, material]);

  useFrame((state, delta) => {
    const frameStep = Math.min(
      delta * 60,
      1.5,
    );

    const elapsed =
      state.clock.elapsedTime;

    liquidSurface.reset();

    balls.forEach((ball, index) => {
      target.set(
        ball.home.x +
          Math.sin(
            elapsed * 0.55 + ball.phase,
          ) *
            0.0035,

        ball.home.y +
          Math.cos(
            elapsed * 0.48 + ball.phase,
          ) *
            0.0035,

        ball.home.z +
          Math.sin(
            elapsed * 0.42 + ball.phase,
          ) *
            0.0025,
      );

      if (pointerActive.current) {
        offset
          .copy(ball.position)
          .sub(pointerPosition.current);

        const distance = offset.length();
        const influenceRadius = 0.34;

        if (distance < influenceRadius) {
          if (distance < 0.001) {
            offset.set(
              Math.sin(index * 1.7),
              Math.cos(index * 1.3),
              Math.sin(index * 0.9),
            );
          }

          offset.normalize();

          const influence =
            1 -
            distance / influenceRadius;

          const repulsion =
            influence *
            influence *
            0.044 *
            frameStep;

          ball.velocity.addScaledVector(
            offset,
            repulsion,
          );

          sidewaysForce
            .set(
              -offset.y,
              offset.x,
              offset.z * 0.45,
            )
            .normalize();

          ball.velocity.addScaledVector(
            sidewaysForce,
            repulsion * 0.42,
          );
        }
      }

      const springStrength =
        pointerActive.current
          ? 0.0028
          : 0.00042;

      springForce
        .copy(target)
        .sub(ball.position)
        .multiplyScalar(
          springStrength * frameStep,
        );

      ball.velocity.add(springForce);

      const damping =
        pointerActive.current
          ? 0.952
          : 0.945;

      ball.velocity.multiplyScalar(
        Math.pow(damping, frameStep),
      );

      if (
        ball.velocity.lengthSq() >
        0.0036
      ) {
        ball.velocity.setLength(0.06);
      }

      ball.position.addScaledVector(
        ball.velocity,
        frameStep,
      );

      ball.position.x = MathUtils.clamp(
        ball.position.x,
        MIN_BOUND,
        MAX_BOUND,
      );

      ball.position.y = MathUtils.clamp(
        ball.position.y,
        MIN_BOUND,
        MAX_BOUND,
      );

      ball.position.z = MathUtils.clamp(
        ball.position.z,
        MIN_BOUND,
        MAX_BOUND,
      );

      liquidSurface.addBall(
        ball.position.x,
        ball.position.y,
        ball.position.z,
        ball.strength,
        12,
      );
    });

    liquidSurface.update();
  });

  return (
    <group
  position={
  isMobile
    ? [1.8, 1.35, 0]
    : [1.35, 0, 0]
}
scale={isMobile ? 0.54 : 1}
>
      <primitive object={liquidSurface} />

      <mesh
        position={[0, 0, 1.5]}
        onPointerEnter={() => {
          pointerActive.current = true;
        }}
        onPointerMove={(event) => {
          pointerActive.current = true;

          if (!event.uv) {
            return;
          }

          pointerPosition.current.set(
            MathUtils.clamp(
              event.uv.x,
              MIN_BOUND,
              MAX_BOUND,
            ),
            MathUtils.clamp(
              event.uv.y,
              MIN_BOUND,
              MAX_BOUND,
            ),
            0.52,
          );
        }}
        onPointerLeave={() => {
          pointerActive.current = false;
        }}
      >
        <planeGeometry args={[14, 10]} />

        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          colorWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function OmniaScene() {
  return (
    <div
      aria-hidden="true"
      className="h-full w-full"
    >
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [
            0,
            0,
            CAMERA_DISTANCE,
          ],
          fov: 42,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference:
            "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 1.38;
        }}
      >
        <ambientLight intensity={0.24} />

        <directionalLight
          position={[5, 6, 7]}
          intensity={2.2}
          color="#ffffff"
        />

        <Environment resolution={1024}>
          <Lightformer
            form="rect"
            intensity={8}
            position={[-5, 3, 5]}
            rotation={[0, 0.5, 0]}
            scale={[6, 1.2, 1]}
          />

          <Lightformer
            form="rect"
            intensity={7}
            position={[5, 1, 4]}
            rotation={[0, -0.6, 0]}
            scale={[2, 6, 1]}
          />

          <Lightformer
            form="rect"
            intensity={3.5}
            position={[0, -5, 4]}
            rotation={[-0.65, 0, 0]}
            scale={[7, 2, 1]}
          />

          <Lightformer
            form="rect"
            intensity={4}
            position={[0, 5, -2]}
            scale={[7, 1, 1]}
          />
        </Environment>

        <LiquidMetalBlob />
      </Canvas>
    </div>
  );
}