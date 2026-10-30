import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function runAction(formData: FormData) {
  'use server';
  const val = formData.get('val');
  const cookieStore = await cookies();
  cookieStore.set('action-ran', String(val ?? 'yes'));
  redirect('/confirm');
}

export default function Home() {
  return (
    <form action={runAction}>
      <input type="text" name="val" defaultValue="hello" />
      <button type="submit">Run action</button>
    </form>
  );
}
