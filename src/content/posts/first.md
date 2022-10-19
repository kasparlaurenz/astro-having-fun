---
title: 'First Article'
date: 'October 18, 2022'
description: 'this is the first article. its an introduction to astro'
readmore: true
read: '21 min'
---

### This is the heading of the blog article 3

Plain text right here

```tsx
// pages/user-info/_props.ts
export async function getServerSideProps(context) {
  const id = context.params.id;
  const user = await prisma.user.findFirst({ where: { id: id } });
  return { props: { user } };
}
// pages/user-info/[id].ts
import Props from './_props'; // This will have to be some wizardry or a compile step
// This should lint error if the type was assigned
// to something other than _props in the same dir
export default function UserInfo(props: Props) {
  return <div>Hello {props.user?.name}</div>;
}
```

Test

```bash
Hello World
```

```properties
npm run build
```

```console
foo@bar:~$ whoami
foo
```

```bash
cd !! YOUR PROJECT DIR !!
npm install
git init
git add -A
git commit -m "init"
git branch -M main
git remote add origin !! YOUR REPO URL HERE !!
git push -u origin main
```

```html
<div class="test">This is a test</div>
```

[Link](https://www.google.com)

<img src="/images/blog/image.jpg" />
