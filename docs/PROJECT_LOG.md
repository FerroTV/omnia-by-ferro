# Omnia by Ferro — Project Log

Този файл документира изграждането на проекта **Omnia by Ferro** стъпка по стъпка.

Целта на този дневник е да пази ясна история на проекта:
- какво е направено;
- защо е направено;
- с кои команди е направено;
- какъв е резултатът.

---

## Основна информация за проекта

**Име на проекта:** Omnia by Ferro  
**Тип проект:** личен уебсайт, портфолио и дигитален архив  
**Основна папка:** `C:\Projects\omnia-by-ferro`  
**Операционна система:** Windows  
**Редактор:** Visual Studio Code  
**Основна технология:** Next.js  

---

## Стъпка 1 — Подготовка на компютъра

### Цел

Да се подготви работната среда преди инсталация и създаване на проекта.

### Действия

- Компютърът беше включен.
- Windows беше стартиран.
- Интернет връзката беше проверена.
- Не беше инсталиран нов софтуер в тази стъпка.

### Резултат

Работната среда беше готова за начална проверка на нужните инструменти.

---

## Стъпка 2 — Проверка на вече инсталирани инструменти

### Цел

Да се провери дали основните инструменти за разработка вече са инсталирани.

### Изпълнени команди

```powershell
node -v
npm -v
git --version
code --version
```

### Резултат

- `node` не беше разпознат като команда.
- `npm` не беше разпознат като команда.
- `git` беше инсталиран.
- `code` беше инсталиран.

### Намерени версии

```txt
Git: 2.52.0.windows.1
Visual Studio Code: 1.122.1
```

### Бележки

Липсата на `node` и `npm` означаваше, че Node.js не е инсталиран или не е достъпен през системния PATH.

---

## Стъпка 3 — Инсталиране на Node.js LTS

### Цел

Да се инсталира Node.js, защото Next.js проектът се нуждае от Node.js, npm и npx.

### Действия

- Беше изтеглен Windows Installer за Node.js LTS.
- Node.js беше инсталиран с настройките по подразбиране.
- PowerShell беше затворен и отворен наново след инсталацията.

### Проверка

```powershell
node -v
```

### Резултат

```txt
Node.js: v24.18.0
```

### Бележки

Node.js беше инсталиран успешно.

---

## Стъпка 4 — Отстраняване на PowerShell проблем с npm

### Цел

Да се позволи нормалното изпълнение на `npm` в PowerShell.

### Проблем

При изпълнение на:

```powershell
npm -v
```

PowerShell върна грешка:

```txt
File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

### Причина

PowerShell блокира изпълнението на скриптове заради текущата Execution Policy настройка.

### Изпълнена команда

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Проверка

След затваряне и повторно отваряне на PowerShell бяха изпълнени:

```powershell
npm -v
npx -v
```

### Резултат

```txt
npm: 11.16.0
npx: 11.16.0
```

### Бележки

Промяната беше направена само за текущия Windows потребител чрез `-Scope CurrentUser`.

---

## Стъпка 5 — Достъп до основната папка за проекти

### Цел

Да се влезе в основната папка, в която ще се съхранява проектът.

### Изпълнени команди

```powershell
cd C:\
mkdir Projects
cd Projects
pwd
```

### Резултат

```txt
C:\Projects
```

### Бележки

При командата `mkdir Projects` PowerShell съобщи, че папката вече съществува. Това не беше проблем, защото целта беше да се уверим, че папката е налична.

---

## Стъпка 6 — Проверка дали проектната папка съществува

### Цел

Да се провери дали папката `omnia-by-ferro` вече съществува в `C:\Projects`.

### Изпълнена команда

```powershell
dir
```

### Резултат

Беше намерена папката:

```txt
C:\Projects\omnia-by-ferro
```

### Бележки

Преди да се създаде Next.js проект, беше важно да се провери дали в тази папка вече има съществуващи файлове.

---

## Стъпка 7 — Проверка на съдържанието на проектната папка

### Цел

Да се провери дали папката `omnia-by-ferro` е празна.

### Проверена папка

```txt
C:\Projects\omnia-by-ferro
```

### Резултат

Папката съществуваше и беше празна.

### Бележки

Това позволи Next.js проектът да бъде създаден директно в тази папка, без риск да се презапишат съществуващи файлове.

---

## Стъпка 8 — Създаване на Next.js проекта

### Цел

Да се създаде нов Next.js проект в празната папка `omnia-by-ferro`.

### Изпълнени команди

```powershell
cd C:\Projects\omnia-by-ferro
npx create-next-app@latest .
```

### Избран вариант

```txt
Yes, use recommended Next.js defaults
```

### Резултат

Next.js проектът беше създаден успешно.

Бяха инсталирани основните зависимости:

```txt
next
react
react-dom
```

Бяха инсталирани и инструменти за разработка:

```txt
@tailwindcss/postcss
@types/node
@types/react
@types/react-dom
eslint
eslint-config-next
tailwindcss
typescript
```

### Допълнителен резултат

- Беше генерирана Next.js структура.
- Беше създаден `package.json`.
- Беше създаден `package-lock.json`.
- Беше инициализирано Git repository.
- TypeScript беше включен.
- Tailwind CSS беше включен.
- ESLint беше включен.

### Бележки

След инсталацията npm показа предупреждение за уязвимости и предложи:

```powershell
npm audit fix --force
```

Тази команда не беше изпълнена, защото може да направи breaking changes и да промени версии по агресивен начин.

---

## Стъпка 9 — Проверка на структурата на проекта

### Цел

Да се провери какви файлове и папки са създадени от Next.js.

### Изпълнена команда

```powershell
dir
```

### Резултат

В проектната папка бяха намерени следните основни елементи:

```txt
.next
app
node_modules
public
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
```

### Бележки

Папките `.next` и `node_modules` се генерират автоматично и не се редактират ръчно.

Файловете `AGENTS.md` и `CLAUDE.md` бяха забелязани, но не бяха променяни.

---

## Стъпка 10 — Създаване на папка за документация

### Цел

Да се създаде отделна папка за проектна документация.

### Изпълнена команда

```powershell
mkdir docs
```

### Резултат

Беше създадена папката:

```txt
C:\Projects\omnia-by-ferro\docs
```

### Бележки

Папката `docs` ще се използва за дневник на проекта, речник и концепция.

---

## Стъпка 11 — Създаване на първите документационни файлове

### Цел

Да се създадат основните файлове за документация на проекта.

### Изпълнени команди

```powershell
New-Item .\docs\PROJECT_LOG.md -ItemType File
New-Item .\docs\GLOSSARY.md -ItemType File
New-Item .\docs\CONCEPT.md -ItemType File
```

### Създадени файлове

```txt
docs\PROJECT_LOG.md
docs\GLOSSARY.md
docs\CONCEPT.md
```

### Резултат

Трите документационни файла бяха създадени успешно.

### Бележки

Файловете първоначално бяха празни и ще се попълват постепенно.

---

## Стъпка 12 — Отваряне на проекта във Visual Studio Code

### Цел

Да се отвори проектът в редактора Visual Studio Code.

### Изпълнена команда

```powershell
code .
```

### Резултат

Проектът беше отворен успешно във Visual Studio Code.

### Бележки

Структурата на проекта се вижда в Explorer панела отляво.

---

## Стъпка 13 — Попълване на PROJECT_LOG.md

### Цел

Да се започне реалната документация на проекта в еднороден формат.

### Файл

```txt
C:\Projects\omnia-by-ferro\docs\PROJECT_LOG.md
```

### Резултат

Файлът `PROJECT_LOG.md` беше подготвен като основен дневник на проекта.

### Бележки

Оттук нататък всяка важна стъпка ще се записва в този файл по един и същи формат:

```txt
Цел
Изпълнени команди
Резултат
Бележки
```

---

## Стъпка 14 — Попълване на GLOSSARY.md

### Цел

Да се създаде първата версия на речника на проекта.

### Файл

```txt
C:\Projects\omnia-by-ferro\docs\GLOSSARY.md
```

### Резултат

Файлът `GLOSSARY.md` беше попълнен с основните понятия, инструменти, команди и файлове, използвани до момента в проекта.

### Включени теми

- Windows
- PowerShell
- Node.js
- npm
- npx
- Git
- Visual Studio Code
- PATH
- Execution Policy
- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- dependencies
- devDependencies
- package.json
- node_modules
- Markdown
- docs
- PROJECT_LOG.md
- GLOSSARY.md
- CONCEPT.md

### Бележки

Речникът ще се разширява постепенно, когато в проекта се появяват нови понятия.

---

## Стъпка 16 — Попълване на CONCEPT.md

### Цел

Да се създаде първата версия на концепцията на проекта **Omnia by Ferro**.

### Файл

```txt
C:\Projects\omnia-by-ferro\docs\CONCEPT.md
```

### Резултат

Файлът `CONCEPT.md` беше попълнен с основната идея, идентичност, структура, визуална посока и дългосрочна цел на сайта.

### Включени теми

- име на проекта;
- смисъл на Omnia и Ferro;
- основна идентичност;
- кратко и разширено описание;
- цел на сайта;
- първа версия;
- основни секции;
- планирани езици;
- визуална посока;
- тон на сайта;
- начални Hero текстове;
- техническа посока;
- подход на разработка;
- дългосрочна посока.

### Бележки

Концепцията ще служи като ориентир при изграждането на дизайна, съдържанието и структурата на сайта.

Оттук нататък решенията за сайта трябва да се съобразяват с този файл, за да не се губи основната посока на проекта.

PS C:\Projects\omnia-by-ferro> Get-Content .\package.json
{
  "name": "omnia-by-ferro",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.2.10",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.10",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
PS C:\Projects\omnia-by-ferro>

---

## Стъпка 20 — Стартиране на локален development server

### Цел

Да се стартира проектът локално и да се провери дали Next.js приложението работи.

### Изпълнена команда

```powershell
npm run dev
```

### Резултат

Next.js development server беше стартиран успешно.

Получен локален адрес:

```txt
http://localhost:3000
```

Получен network адрес:

```txt
http://192.168.0.58:3000
```

### Версия

```txt
Next.js: 16.2.10
Turbopack: enabled
```

### Бележки

PowerShell трябва да остане отворен, докато development server-ът работи.

Next.js показа стандартно съобщение за anonymous telemetry. Това не беше грешка и не беше променяно в тази стъпка.

---

## Стъпка 21 — Отваряне на сайта в браузър

### Цел

Да се провери дали локалният сайт се зарежда правилно в браузъра.

### Отворен адрес

```txt
http://localhost:3000
```

### Резултат

Началната страница на Next.js беше заредена успешно в браузъра.

На страницата се вижда стандартният стартов екран на Next.js с текст:

```txt
To get started, edit the page.tsx file.
```

### Бележки

Това потвърждава, че проектът работи локално преди да започнем промени по кода.

---

## Стъпка 23 — Проверка на app папката и началната страница

### Цел

Да се провери съдържанието на папката `app` и да се прочете стартовият код на началната страница преди промени.

### Проверена папка

```txt
C:\Projects\omnia-by-ferro\app
```

### Изпълнени команди

```powershell
dir .\app
Get-Content .\app\page.tsx
```

### Резултат

В папката `app` бяха намерени следните файлове:

```txt
favicon.ico
globals.css
layout.tsx
page.tsx
```

Файлът `page.tsx` съдържаше стандартната начална страница, генерирана от Next.js.

### Основни наблюдения

- `page.tsx` импортира `Image` от `next/image`.
- Страницата показва стандартното Next.js съдържание.
- Използват се изображенията `next.svg` и `vercel.svg`.
- Има бутони към Vercel и Next.js документацията.
- Това съдържание е временно и ще бъде заменено с началната страница на Omnia by Ferro.

### Бележки

Стартовият код беше само прочетен, без да бъде променян.

Предупреждението в браузъра за `vercel.svg` идва от стандартната Next.js стартова страница и не е проблем за проекта.

---

## Стъпка 25 — Проверка на layout.tsx и globals.css

### Цел

Да се проверят глобалните файлове, които влияят върху цялото Next.js приложение.

### Проверени файлове

```txt
C:\Projects\omnia-by-ferro\app\layout.tsx
C:\Projects\omnia-by-ferro\app\globals.css
```

### Изпълнени команди

```powershell
Get-Content .\app\layout.tsx
Get-Content .\app\globals.css
```

### Резултат

Файловете бяха прочетени успешно.

### Наблюдения за layout.tsx

Файлът `layout.tsx` съдържа основната структура на приложението.

Той:

- импортира `Metadata` от Next.js;
- импортира шрифтовете `Geist` и `Geist_Mono`;
- импортира глобалния CSS файл `globals.css`;
- задава metadata със стандартните стойности от Next.js;
- задава `lang="en"` за HTML документа;
- задава основни класове върху `html` и `body`.

### Наблюдения за globals.css

Файлът `globals.css` съдържа глобалните CSS настройки.

Той:

- импортира Tailwind CSS;
- дефинира CSS променливи за background и foreground;
- дефинира Tailwind theme стойности;
- има настройка за dark mode чрез `prefers-color-scheme`;
- задава основни стилове за `body`.

### Бележки

Файловете бяха само прочетени, без да бъдат променяни.

Следващата логична стъпка ще бъде да променим metadata и началната страница, за да започне проектът да носи идентичността на **Omnia by Ferro**.

---

## Стъпка 27 — Обновяване на metadata в layout.tsx

### Цел

Да се замени стандартната Next.js metadata информация с идентичността на проекта **Omnia by Ferro**.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\app\layout.tsx
```

### Направена промяна

Стандартните стойности:

```txt
title: "Create Next App"
description: "Generated by create next app"
```

бяха заменени с:

```txt
title: "Omnia by Ferro"
description: "A personal digital space for projects, ideas, code, art and experiments."
```

### Резултат

Заглавието на browser tab-а беше променено успешно на:

```txt
Omnia by Ferro
```

### Бележки

Визуалното съдържание на страницата още не беше променено, защото то се намира във файла:

```txt
C:\Projects\omnia-by-ferro\app\page.tsx
```

Тази стъпка промени само metadata информацията на сайта.

---

## Стъпка 29 — Създаване на първа начална страница

### Цел

Да се замени стандартната Next.js начална страница с първа минимална версия на началната страница за **Omnia by Ferro**.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\app\page.tsx
```

### Направена промяна

Стандартното Next.js съдържание беше премахнато.

На негово място беше добавена първа Hero секция за **Omnia by Ferro**.

### Ново съдържание на страницата

Страницата вече показва:

```txt
by Ferro
OMNIA
A personal digital space for projects, ideas, code, art and experiments.
Explore Projects
Enter the Lab
```

### Визуален резултат

Началната страница вече има:

- черен фон;
- голямо заглавие `OMNIA`;
- малък подпис `by Ferro`;
- кратко описание;
- два начални бутона;
- минималистична тъмна визия.

### Бележки

Това е първа базова версия на началната страница.

На този етап още няма:

- навигация;
- секции Projects и Lab;
- анимации;
- многоезичност;
- финална визуална идентичност.

Тези елементи ще се добавят постепенно.

---

## Стъпка 31 — Допълване на GLOSSARY.md с понятия от първата страница

### Цел

Да се допълни речникът на проекта с понятия, които се появиха при създаването на първата начална страница.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\docs\GLOSSARY.md
```

### Резултат

Файлът `GLOSSARY.md` беше допълнен с нови термини, свързани с React, Next.js, TSX структурата и първата Hero секция на сайта.

### Добавени теми

- `page.tsx`
- Component / Компонент
- `Home`
- TSX
- JSX
- `className`
- Hero section
- Tailwind utility class
- `main`
- `section`
- `a`
- `href`
- Anchor link

### Бележки

Речникът вече описва не само инструментите за стартиране на проекта, но и първите реални понятия от кода на началната страница.

Той ще продължи да се разширява при всяка нова по-важна техническа или дизайнерска стъпка.

---

## Стъпка 33 — Проверка на Git status

### Цел

Да се провери как Git вижда текущото състояние на проекта след първите промени по кода и документацията.

### Изпълнени команди

```powershell
git status
git status --short
```

### Резултат

Git показа, че има два променени файла:

```txt
app/layout.tsx
app/page.tsx
```

Git също показа една нова папка, която все още не се следи:

```txt
docs/
```

### Кратък резултат от `git status --short`

```txt
 M app/layout.tsx
 M app/page.tsx
?? docs/
```

### Обяснение

```txt
M  означава modified — файлът е променен.
?? означава untracked — Git вижда нов файл или папка, но още не ги следи.
```

### Бележки

В тази стъпка не беше изпълнен `git add` и не беше направен `git commit`.

Проверката беше направена само за да видим текущото състояние на проекта преди първия Git checkpoint.

---

## Стъпка 35 — Проверка на Git user config

### Цел

Да се провери дали Git има зададени локални данни за автора преди първия commit.

### Изпълнени команди

```powershell
git config --get user.name
git config --get user.email
```

### Резултат

Git върна зададено потребителско име:

```txt
zhelyazkov
```

Git върна и зададен email адрес.

### Бележки

Пълният email адрес не беше записан в документацията, защото проектът може по-късно да бъде качен в публично GitHub repository.

Преди първия публичен commit ще се прецени дали да се използва текущият email или GitHub private/no-reply email.

---

## Стъпка 37 — Проверка на промените с git diff

### Цел

Да се прегледат реалните промени във файловете `layout.tsx` и `page.tsx` преди първия Git checkpoint.

### Изпълнени команди

```powershell
git --no-pager diff -- app/layout.tsx
git --no-pager diff -- app/page.tsx
```

### Резултат

Промените бяха прегледани успешно.

### Наблюдения за layout.tsx

В `layout.tsx` беше потвърдена промяната на metadata информацията:

```txt
title: "Omnia by Ferro"
description: "A personal digital space for projects, ideas, code, art and experiments."
```

### Наблюдения за page.tsx

В `page.tsx` беше потвърдено, че стандартната Next.js начална страница е заменена с първата Hero секция на **Omnia by Ferro**.

### Бележки

Git показа предупреждение за line endings:

```txt
LF will be replaced by CRLF the next time Git touches it
```

Това предупреждение не беше третирано като грешка и не беше променяно в тази стъпка.

---

## Стъпка 38 — Добавяне на newline в края на файловете

### Цел

Да се премахне предупреждението `No newline at end of file`.

### Променени файлове

```txt
C:\Projects\omnia-by-ferro\app\layout.tsx
C:\Projects\omnia-by-ferro\app\page.tsx
```

### Действия

В края на всеки файл беше добавен празен нов ред.

### Резултат

Файловете бяха запазени с правилен newline в края.

### Бележки

Това е малка, но добра практика при работа с текстови и code файлове.

---

## Стъпка 39 — Повторна проверка на git diff

### Цел

Да се провери дали предупреждението `No newline at end of file` е премахнато.

### Изпълнени команди

```powershell
git --no-pager diff -- app/layout.tsx
git --no-pager diff -- app/page.tsx
```

### Резултат

Предупреждението `No newline at end of file` вече не се появява.

### Бележки

Предупреждението за line endings остава:

```txt
LF will be replaced by CRLF the next time Git touches it
```

То не беше променяно, защото на този етап не блокира проекта и не влияе на работата на сайта.

---

## Стъпка 41 — Допълване на GLOSSARY.md с Git понятия

### Цел

Да се допълни речникът на проекта с Git понятия, които вече бяха използвани при проверката на състоянието и промените в проекта.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\docs\GLOSSARY.md
```

### Резултат

Файлът `GLOSSARY.md` беше допълнен с основни Git понятия и обяснения.

### Добавени теми

- `git status`
- `git status --short`
- `git diff`
- `--no-pager`
- Pager mode
- Modified file
- Untracked file
- Commit
- Git checkpoint
- Line endings
- LF
- CRLF
- Newline at end of file

### Бележки

Тези понятия ще бъдат важни преди първия commit и при бъдеща работа с Git историята на проекта.

---

## Стъпка 43 — Финална проверка преди staging

### Цел

Да се провери текущото Git състояние непосредствено преди файловете да бъдат подготвени за първия commit.

### Изпълнена команда

```powershell
git status --short
```

### Резултат

Git показа следното състояние:

```txt
 M app/layout.tsx
 M app/page.tsx
?? docs/
```

### Обяснение

```txt
M  означава, че файлът е променен.
?? означава, че папката или файлът все още не се следи от Git.
```

### Бележки

Състоянието е очаквано.

Следващата стъпка ще бъде подготовка на тези файлове за първия Git checkpoint чрез `git add`.

---

## Стъпка 45 — Staging на първите промени

### Цел

Да се подготвят първите реални промени за първия Git checkpoint.

### Изпълнена команда

```powershell
git add app/layout.tsx app/page.tsx docs
```

### Проверка

```powershell
git status --short
```

### Резултат

Git показа следното състояние:

```txt
M  app/layout.tsx
M  app/page.tsx
A  docs/CONCEPT.md
A  docs/GLOSSARY.md
A  docs/PROJECT_LOG.md
```

### Обяснение

```txt
M  означава modified — променен файл, вече подготвен за commit.
A  означава added — нов файл, вече подготвен за commit.
```

### Бележки

Файловете бяха staged успешно.

Git отново показа предупреждение за line endings:

```txt
LF will be replaced by CRLF the next time Git touches it
```

Това предупреждение не блокира commit-а и не беше променяно в тази стъпка.

---

## Стъпка 47 — Проверка след допълване на PROJECT_LOG.md

### Цел

Да се провери Git състоянието след допълване на `PROJECT_LOG.md`.

### Изпълнена команда

```powershell
git status --short
```

### Резултат

Git показа следното състояние:

```txt
M  app/layout.tsx
M  app/page.tsx
A  docs/CONCEPT.md
A  docs/GLOSSARY.md
AM docs/PROJECT_LOG.md
```

### Обяснение

Състоянието `AM` означава, че файлът е бил добавен към staging, но след това е бил променен отново.

### Бележки

Това беше очаквано, защото `PROJECT_LOG.md` беше редактиран след първото `git add`.

---

## Стъпка 48 — Re-stage на PROJECT_LOG.md

### Цел

Да се добави последната версия на `PROJECT_LOG.md` към staging area.

### Изпълнена команда

```powershell
git add docs/PROJECT_LOG.md
```

### Проверка

```powershell
git status --short
```

### Резултат

Git показа следното състояние:

```txt
M  app/layout.tsx
M  app/page.tsx
A  docs/CONCEPT.md
A  docs/GLOSSARY.md
A  docs/PROJECT_LOG.md
```

### Бележки

Състоянието `AM` беше изчистено.

Всички файлове, които трябва да влязат в първия Git checkpoint, вече са staged.

---

## Стъпка 51 — ESLint проверка преди първия commit

### Цел

Да се провери дали текущият код има ESLint проблеми преди първия Git checkpoint.

### Изпълнена команда

```powershell
npm run lint
```

### Резултат

ESLint проверката мина успешно.

PowerShell се върна към prompt-а без съобщения за грешки.

### Бележки

Това означава, че текущите промени в `layout.tsx` и `page.tsx` не нарушават ESLint правилата на проекта.

---

## Стъпка 50 — Финален re-stage на PROJECT_LOG.md преди проверки

### Цел

Да се добави последната версия на `PROJECT_LOG.md` към staging area след последните промени в дневника.

### Изпълнена команда

```powershell
git add docs/PROJECT_LOG.md
```

### Проверка

```powershell
git status --short
```

### Резултат

Git показа, че всички файлове за първия checkpoint са staged.

### Бележки

Тази стъпка беше направена, за да не остане част от документацията извън първия commit.

---

## Стъпка 53 — Re-stage след ESLint документацията

### Цел

Да се добави последната версия на `PROJECT_LOG.md` към staging area след документиране на ESLint проверката.

### Изпълнена команда

```powershell
git add docs/PROJECT_LOG.md
```

### Проверка

```powershell
git status --short
```

### Резултат

Git показа следното staged състояние:

```txt
M  app/layout.tsx
M  app/page.tsx
A  docs/CONCEPT.md
A  docs/GLOSSARY.md
A  docs/PROJECT_LOG.md
```

### Бележки

Това беше нужно, защото `PROJECT_LOG.md` беше редактиран след предишното `git add`.

---

## Стъпка 54 — Избор на Git email преди първия commit

### Цел

Да се избере дали първият commit да използва текущия Git email или GitHub no-reply email.

### Избран вариант

```txt
Вариант B — настройваме no-reply email преди commit
```

### Причина

Избран беше GitHub no-reply email, за да не се записва личен email адрес в публична Git история.

### Бележки

Това е по-добра privacy практика, особено ако repository-то по-късно стане публично.

---

## Стъпка 55 — Настройване на GitHub no-reply email за проекта

### Цел

Да се зададе GitHub no-reply email само за проекта `omnia-by-ferro`.

### Изпълнена команда

```powershell
git config user.email "187263860+FerroTV@users.noreply.github.com"
```

### Проверка

```powershell
git config --get user.email
```

### Резултат

Git върна следния email за текущия проект:

```txt
187263860+FerroTV@users.noreply.github.com
```

### Бележки

Тази настройка е локална за текущото repository.

Тя не променя глобалния Git email на компютъра.

---

## Стъпка 57 — Финален re-stage след no-reply документацията

### Цел

Да се добави последната версия на `PROJECT_LOG.md` към staging area след документиране на GitHub no-reply email настройката.

### Изпълнена команда

```powershell
git add docs/PROJECT_LOG.md
```

### Проверка

```powershell
git status --short
```

### Резултат

Git показа следното staged състояние:

```txt
M  app/layout.tsx
M  app/page.tsx
A  docs/CONCEPT.md
A  docs/GLOSSARY.md
A  docs/PROJECT_LOG.md
```

### Бележки

Всички файлове за първия Git checkpoint бяха staged.

---

## Стъпка 58 — Проверка на staged промените

### Цел

Да се провери какво точно ще влезе в първия commit.

### Изпълнена команда

```powershell
git --no-pager diff --cached --stat
```

### Резултат

Git показа обобщение на staged промените:

```txt
app/layout.tsx      |    5 +-
app/page.tsx        |   79 +--
docs/CONCEPT.md     |  373 ++++++++++++++
docs/GLOSSARY.md    | 1288 ++++++++++++++++++++++++++++++++++++++++++++++
docs/PROJECT_LOG.md | 1410 +++++++++++++++++++++++++++++++++++++++++++++++++++
5 files changed, 3099 insertions(+), 56 deletions(-)
```

### Бележки

Големият брой добавени редове идва основно от документацията.

---

## Стъпка 59 — Първи Git commit

### Цел

Да се създаде първият Git checkpoint на проекта.

### Изпълнена команда

```powershell
git commit -m "Initial Omnia by Ferro homepage and docs"
```

### Резултат

Commit-ът беше създаден успешно.

```txt
Commit hash: ac718f5
Commit message: Initial Omnia by Ferro homepage and docs
Branch: master
```

### Включени файлове

```txt
app/layout.tsx
app/page.tsx
docs/CONCEPT.md
docs/GLOSSARY.md
docs/PROJECT_LOG.md
```

### Бележки

Това е първата запазена контролна точка на проекта **Omnia by Ferro**.

---

## Стъпка 60 — Проверка след първия commit

### Цел

Да се потвърди, че commit-ът е създаден и работната директория е чиста.

### Изпълнени команди

```powershell
git status --short
git log --oneline -1
```

### Резултат

Командата `git status --short` не върна никакви файлове.

Това означава, че работната директория е чиста.

Последният commit беше потвърден:

```txt
ac718f5 (HEAD -> master) Initial Omnia by Ferro homepage and docs
```

### Бележки

Проектът има първи стабилен Git checkpoint.

След тази точка може безопасно да се продължи с нови промени.

---

## Стъпка 62 — Проверка след документацията на първия commit

### Цел

Да се провери Git състоянието след добавяне на информация за първия commit в `PROJECT_LOG.md`.

### Изпълнена команда

```powershell
git status --short
```

### Резултат

Git показа една променена документационна промяна:

```txt
 M docs/PROJECT_LOG.md
```

### Бележки

Това беше очаквано, защото `PROJECT_LOG.md` беше редактиран след първия commit.

---

## Стъпка 63 — Staging на актуализирания PROJECT_LOG.md

### Цел

Да се подготви актуализираният `PROJECT_LOG.md` за втори commit.

### Изпълнена команда

```powershell
git add docs/PROJECT_LOG.md
```

### Проверка

```powershell
git status --short
```

### Резултат

Git показа:

```txt
M  docs/PROJECT_LOG.md
```

### Бележки

Файлът беше staged успешно.

---

## Стъпка 64 — Втори commit за документацията

### Цел

Да се запише документационната актуализация след първия Git checkpoint.

### Изпълнена команда

```powershell
git commit -m "Document first Git checkpoint"
```

### Резултат

Commit-ът беше създаден успешно.

```txt
Commit hash: 475d09a
Commit message: Document first Git checkpoint
Changed files: docs/PROJECT_LOG.md
```

### Бележки

Това беше чисто документационен commit.

---

## Стъпка 65 — Проверка след втория commit

### Цел

Да се потвърди, че работната директория е чиста и че последните два commit-а съществуват.

### Изпълнени команди

```powershell
git status --short
git log --oneline -2
```

### Резултат

`git status --short` не върна никакви файлове.

Последните два commit-а бяха:

```txt
475d09a Document first Git checkpoint
ac718f5 Initial Omnia by Ferro homepage and docs
```

### Бележки

Проектът е в чисто състояние след втория commit.

---

## Стъпка 67–69 — Добавяне на Projects и Lab секции

### Цел

Да се разшири началната страница отвъд Hero секцията чрез добавяне на първи реални съдържателни секции.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\app\page.tsx
```

### Направена промяна

Към началната страница бяха добавени две нови секции:

```txt
Projects
Lab
```

### Резултат

Бутоните в Hero секцията вече водят към реални anchor секции:

```txt
#projects
#lab
```

Секцията `Projects` съдържа първи примерни проектни карти:

- CRM Integration
- SSI App
- Omnia by Ferro

Секцията `Lab` съдържа първо описание на експерименталната част на сайта.

### Проверка

Беше изпълнена ESLint проверка:

```powershell
npm run lint
```

### Резултат от проверката

ESLint мина успешно без грешки.

### Бележки

Това е първата версия на съдържателната структура под Hero секцията.

Следващи възможни подобрения:

- горна навигация;
- About секция;
- Contact секция;
- по-добър responsive polish;
- плавни преходи и анимации.

---

## Стъпка 75–77 — Добавяне на горна навигация

### Цел

Да се добави първа горна навигация към началната страница.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\app\page.tsx
```

### Направена промяна

Към началната страница беше добавен `header` с навигация.

Навигацията съдържа:

```txt
OMNIA
Home
Projects
Lab
```

### Резултат

Сайтът вече има sticky горна навигация с линкове към основните секции.

### Проверка

Беше изпълнена ESLint проверка:

```powershell
npm run lint
```

### Резултат от проверката

ESLint мина успешно без грешки.

---

## Стъпка 75–86 — Завършване на първа homepage структура

### Цел

Да се разшири началната страница до първа завършена структура.

### Променен файл

```txt
C:\Projects\omnia-by-ferro\app\page.tsx
```

### Направени промени

Към началната страница бяха добавени:

- sticky горна навигация;
- About секция;
- Contact секция;
- реални contact линкове;
- Footer.

### Текуща структура на началната страница

```txt
Header / Navigation
Hero
Projects
Lab
About
Contact
Footer
```

### Contact данни

Добавени са следните контактни връзки:

```txt
Email: zhelyazkov.it@gmail.com
GitHub: https://github.com/FerroTV
LinkedIn: https://www.linkedin.com/in/zhelyazko-zhelyazkov-29669586
```

### Проверка

Беше изпълнена ESLint проверка:

```powershell
npm run lint
```

### Резултат от проверката

ESLint мина успешно без грешки.

### Бележки

Това е първата цялостна версия на homepage структурата.

Следващите възможни подобрения са:

- responsive проверка на малък екран;
- по-добро съдържание в About;
- polish на визуалния стил;
- анимации;
- многоезичност.

---

## Стъпка 92–97 — Responsive проверка и мобилни корекции

### Цел

Да се провери началната страница на малък екран и да се направят първи responsive корекции.

### Проверен изглед

```txt
Mobile width: 390px
```

### Наблюдения

Мобилният изглед беше функционален, но горната навигация беше твърде сбита.

Първоначално навигацията изглеждаше прекалено натъпкана на малък екран.

### Направени промени

Във файла:

```txt
C:\Projects\omnia-by-ferro\app\page.tsx
```

бяха направени две responsive подобрения:

- навигацията на мобилен беше подредена в две линии;
- Hero секцията беше направена по-компактна на малък екран.

### Резултат

Мобилният изглед стана по-балансиран:

- `OMNIA` стои отделно в навигацията;
- линковете `Home`, `Projects`, `Lab`, `About`, `Contact` имат повече пространство;
- Hero съдържанието не стои толкова ниско;
- страницата остава четима на 390px ширина.

### Проверка

Беше изпълнена ESLint проверка:

```powershell
npm run lint
```

### Резултат от проверката

ESLint мина успешно без грешки.

### Бележки

Това е първата responsive корекция на началната страница.

По-късно може да се направи допълнителен polish за още по-малки екрани.

---

## Стъпка 111–118 — GitHub repository и първи push

### Цел

Да се създаде GitHub repository за проекта и локалният Git проект да бъде качен онлайн.

### GitHub repository

Беше създадено публично repository:

```txt
https://github.com/FerroTV/omnia-by-ferro
```

### Branch

Локалният branch беше преименуван от:

```txt
master
```

на:

```txt
main
```

### Remote

Беше добавен GitHub remote:

```txt
origin  https://github.com/FerroTV/omnia-by-ferro.git
```

### Push

Проектът беше качен в GitHub с:

```powershell
git push -u origin main
```

### Резултат

Локалният branch `main` вече следи GitHub branch-а `origin/main`.

Проверка:

```powershell
git status -sb
```

Резултат:

```txt
## main...origin/main
```

### Бележка

От този момент нататък проектът има локална Git история и онлайн копие в GitHub.

---

## Стъпка 129–137 — Vercel deployment

### Цел

Да се публикува проектът онлайн чрез Vercel.

### Причина за избор на Vercel

Проектът е изграден с Next.js, а Vercel има директна интеграция с GitHub и автоматично разпознава Next.js приложения.

### Vercel project

Беше създаден Vercel project:

```txt
omnia-by-ferro
```

### Свързан GitHub repository

```txt
https://github.com/FerroTV/omnia-by-ferro
```

### Branch

Deployment-ът използва branch:

```txt
main
```

### Framework preset

Vercel автоматично разпозна проекта като:

```txt
Next.js
```

### Production deployment

Първият production deployment беше успешен.

Статус:

```txt
Ready
```

### Live URL

Сайтът е достъпен онлайн на:

```txt
https://omnia-by-ferro.vercel.app
```

### Резултат

Проектът вече има работеща live версия.

От този момент нататък всяка следваща промяна, качена към GitHub branch `main`, може да създава нов Vercel deployment.

---

## Стъпка 149–163 — Първи дизайн polish на началната страница

### Цел

Да се подобри визуалното усещане на началната страница, без да се променя структурата на сайта.

### Направени промени

Във файла `app/page.tsx` бяха направени първи визуални подобрения:

- добавен по-мек фонов gradient;
- header-ът беше направен по-стъклен;
- `by Ferro` беше оформен като малък identity badge;
- `OMNIA` получи по-силно typographic усещане;
- Project cards получиха по-мек фон, shadow и hover ефект.

### Проверки

Беше изпълнена ESLint проверка с `npm run lint`.

Резултат: без грешки.

### Git

Промяната беше записана с commit:

`f31b5f7 Polish homepage visual design`

### Deployment

След `git push` Vercel автоматично направи нов production deployment.

Статус: Ready.

### Live проверка

Промяната беше проверена на live сайта:

https://omnia-by-ferro.vercel.app

### Резултат

Началната страница вече изглежда по-малко като технически starter template и повече като минималистично арт/портфолио пространство.

---

## Стъпка 172–184 — Втори visual polish на началната страница

### Цел

Да се доизчистят малки интерфейсни детайли на началната страница, без да се променя структурата на сайта.

### Направени промени

Във файла `app/page.tsx` бяха подобрени:

- Hero бутоните;
- section labels;
- Contact линковете;
- Footer-ът.

### Визуален резултат

Интерфейсът стана по-консистентен:

- бутоните имат по-фин hover ефект;
- section labels изглеждат като малки badges;
- Contact линковете са по-ясни action links;
- Footer-ът остана минимален, без претрупване.

### Проверки

Беше изпълнена ESLint проверка с `npm run lint`.

Резултат: без грешки.

### Git

Промяната беше записана с commit:

`6358afb Refine homepage interface details`

### Deployment

След `git push` Vercel автоматично направи нов production deployment.

Статус: Ready.

### Live проверка

Промяната беше проверена на live сайта:

https://omnia-by-ferro.vercel.app

### Резултат

Началната страница вече изглежда по-завършена и по-консистентна като минималистичен portfolio/interface проект.

---

## Стъпка 190–199 — Projects section content polish

### Цел

Да се подобри съдържанието на Projects секцията, така че картите да изглеждат по-реални и по-подходящи за portfolio сайт.

### Направени промени

Във файла `app/page.tsx` бяха подобрени трите project карти:

- `CRM Integration`;
- `SSI App`;
- `Omnia by Ferro`.

Към всяка карта беше добавено:

- по-ясно описание;
- по-конкретен контекст;
- tech/context badges.

### Project badges

`CRM Integration`:

- PHP;
- Microsoft Graph;
- CRM.

`SSI App`:

- Angular;
- TypeScript;
- Learning App.

`Omnia by Ferro`:

- Next.js;
- Tailwind CSS;
- Portfolio.

### Проверки

Беше изпълнена ESLint проверка с `npm run lint`.

Резултат: без грешки.

### Git

Промяната беше записана с commit:

`62d0d60 Improve projects section content`

### Deployment

След `git push` Vercel автоматично направи нов production deployment.

Статус: Ready.

### Live проверка

Промяната беше проверена на live сайта:

https://omnia-by-ferro.vercel.app/#projects

### Резултат

Projects секцията вече изглежда по-съдържателна и по-близо до реална portfolio секция.

---

## Стъпка 204–211 — Lab section content polish

### Цел

Да се направи Lab секцията по-съдържателна и по-ясна като експериментална зона на Omnia.

### Направени промени

Във файла `app/page.tsx` към Lab секцията бяха добавени четири направления:

- `AI Concepts`;
- `Interface Experiments`;
- `Visual Prototypes`;
- `Future Systems`.

### Резултат

Lab секцията вече не е само общо описание, а показва какви типове идеи и експерименти ще живеят в тази част на сайта.

### Проверки

Беше изпълнена ESLint проверка с `npm run lint`.

Резултат: без грешки.

### Git

Промяната беше записана с commit:

`44626c4 Improve lab section content`

### Deployment

След `git push` Vercel автоматично направи нов production deployment.

Статус: Ready.

### Live проверка

Промяната беше проверена на live сайта:

https://omnia-by-ferro.vercel.app/#lab