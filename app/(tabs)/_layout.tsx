import { Redirect, Slot } from 'expo-router'

export default function _layout() {
  const isAuthenticated = false; // replace with real auth check

  if (!isAuthenticated) return <Redirect href="/sign-in" />

  return <Slot />
}
