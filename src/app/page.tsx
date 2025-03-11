import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div >
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-red-500">
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          Sign up
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
