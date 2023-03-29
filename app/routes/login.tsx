import { Link } from "@remix-run/react";
import logo from "~/assets/logo.svg";
import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { Label } from "~/components/label";

export default function LoginRoute() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md pl-5 pb-3">
          <Link to="/" className="-m-1.5 p-1.5">
            <img src={logo} alt="Ice-Stack Logo" className="w-auto h-6" />
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="bg-white py-8 shadow sm:rounded-lg px-10">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h3>
            <form className="space-y-6 mt-6" action="#" method="POST">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  variant={"default"}
                  size="lg"
                  className="w-full"
                >
                  Create account
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link
                    className="underline underline-offset-4 font-medium"
                    to={{
                      pathname: "/register",
                      // search: searchParams.toString(),
                    }}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
