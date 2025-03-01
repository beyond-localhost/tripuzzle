import { SubmitButton } from "@/components/submit-button";
import { signUpAction } from "@/app/actions";

export default function Signup() {
  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>

        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
