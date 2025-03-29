import { Link } from "react-router";
import { Card, CardContent } from "./ui/card.tsx";
import { Label } from "./ui/label.tsx";
import { Input } from "./ui/input.tsx";
import { Button } from "./ui/button.tsx";
import SignupImg from "@/assets/the-new-york-public-library.jpg"
import { ChevronLeft } from "lucide-react";
import DarkLogo from '@/assets/trimmed-starvoxx-logo-dark.png';
import LightLogo from '@/assets/trimmed-starvoxx-logo.png';
import { useTheme } from "./theme-provider.tsx";
import { useEffect, useState } from "react";


const SignupForm = () => {
    const { theme } = useTheme()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // REGEX TO VALIDATE FORM INPUT
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;

    // STATES TO TRACK ERRORS
    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)

    useEffect(() => {
            if (firstName){
                setIsValidFirstName(USER_REGEX.test(firstName))
            }
    }, [firstName])

    useEffect(() => {
            if(lastName){
                setIsValidLastName(USER_REGEX.test(lastName))
            }
    }, [lastName])

    useEffect(() => {
            if(email){
                setIsValidEmail(EMAIL_REGEX.test(email))
            }
    }, [email])

    useEffect(() => {
            if(password){
                setIsValidPassword(PWD_REGEX.test(password))
            }
    }, [password])

    useEffect(() => {
        if (confirmPassword) {
            setIsValidConfirmPassword(password === confirmPassword);
        }
    }, [password, confirmPassword]);

    const handleSubmit = (e) => {
        e.preventDefault()
        // Submit Form To Backend
        console.log({firstName, lastName, email, password, confirmPassword})
        // Clear Form
    }

    return (
            <div className="flex flex-col gap-4">
                <Card className="overflow-hidden py-0">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        {/* Form */}
                        <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                {/* Form Heading */}
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Create account</h1>
                                    <p 
                                        className="text-balance text-muted-foreground
                                        flex"
                                    >
                                        Create a &nbsp;
                                        <span className="w-16 mt-1">
                                            <img 
                                                src={theme==='light'? DarkLogo : LightLogo} 
                                                alt="starvoxx"
                                            />
                                        </span>
                                        &nbsp;account. It's free 😉
                                    </p>
                                </div>
                                {/* First Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input 
                                        id="firstName"
                                        type="text"
                                        placeholder="nigel"
                                        required
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className={`focus:outline-none ${!isValidFirstName ? "border-red-300": ""}`}
                                    />
                                    {!isValidFirstName && <div className="text-sm text-red-400 bg-red-100/95 px-2">* Please enter a valid first name.</div>}
                                </div>
                                {/* Last Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="zenter"
                                        required
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {!isValidLastName && <div className="text-sm text-red-400 bg-red-100/95 px-2">* Please enter a valid last name.</div>}
                                </div>
                                {/* Email */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="nigel@example.com"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {!isValidEmail && <div className="text-sm text-red-400 bg-red-100/95 px-2">* Please enter a valid email.</div>}
                                </div>
                                {/* Password */}
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="********"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {!isValidPassword && <div className="text-sm text-red-400 bg-red-100/95 px-2">* Password too weak.</div>}
                                </div>
                                {/* Confirm Password */}
                                <div className="grid gap-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="********"
                                        required
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {!isValidConfirmPassword && <div className="text-sm text-red-400 bg-red-100/80 px-2">Passwords do not match.</div>}
                                </div>
                                {/* Submit */}
                                <div>
                                    <Button 
                                        type="submit" 
                                        className="w-full" 
                                        disabled={!isValidFirstName || !isValidLastName || !isValidEmail || !isValidPassword || !isValidConfirmPassword}
                                    >
                                        Join
                                    </Button>
                                </div>
                                {/* Alternative Signup Method */}
                                <div>
                                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                            Or continue with
                                        </span>
                                    </div>
                            </div>
                            {/* Signup Alternatives */}
                              <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" className="w-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="sr-only">Login with Apple</span>
                                </Button>
                                <Button variant="outline" className="w-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="sr-only">Login with Google</span>
                                </Button>
                                <Button variant="outline" className="w-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="sr-only">Login with Meta</span>
                                </Button>
                              </div>

                            {/* Direct to Login*/}
                            <div className="text-center text-sm">
                                Have an account already? &nbsp; 
                                <Link to="/login" className="underline underline-offset-4">
                                    Login
                                </Link>
                            </div>
                            {/* Direct to Home */}
                            <div className="text-center text-sm flex justify-center underline underline-offset-4">
                              <Link to="/" className="flex"><ChevronLeft/> Home</Link>
                            </div>
                        </div>
                        </form>
                        {/* Form Image */}
                        <div className="relative hidden bg-muted md:block">
                            <img
                              src={SignupImg}
                              alt="Image"
                              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7]"
                            />
                        </div>
                    </CardContent>
                </Card>
                <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                    By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                    and <a href="#">Privacy Policy</a>.
                </div>

            </div>
            )
}
export default SignupForm
