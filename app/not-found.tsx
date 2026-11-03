import { redirect } from 'next/navigation';

export default function NotFound() {
  // Automatically redirects to the home page
  redirect('/');
}