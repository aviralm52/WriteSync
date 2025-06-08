import Link from "next/link"
import { Users, Zap, Shield, FileText, Mail, Plus, UserPlus, Star, Github, Linkedin, Instagram } from "lucide-react"

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NewDocumentButton from "@/components/NewDocumentButton"


const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WriteSync</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            {/* <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Free
            </Button> */}
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              >
                <SignInButton />
              </Button>
            </SignedOut>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">✨ Now in Beta - Free to Use</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Write Together.{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Instantly.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  WriteSync lets you and your team co-edit documents in real-time, see each other&apos;s cursors, and
                  collaborate seamlessly — wherever you are.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Get Started Free
                </Button> */}

                <SignedIn>
                  <NewDocumentButton />
                </SignedIn>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Watch Demo
                </Button>

              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise security</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-100 rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-4">WriteSync Document</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-blue-200 rounded w-full relative">
                      <div className="absolute right-0 top-0 w-1 h-3 bg-blue-600 animate-pulse"></div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-3 bg-purple-200 rounded w-2/3 relative">
                      <div className="absolute right-0 top-0 w-1 h-3 bg-purple-600 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                      A
                    </div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">
                      B
                    </div>
                    <span className="text-xs text-gray-500">2 people editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything you need for seamless collaboration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make team writing effortless and productive
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Real-time Syncing</h3>
                <p className="text-gray-600">
                  See changes instantly as your team types. Watch cursors move and text appear in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Secure Invites</h3>
                <p className="text-gray-600">
                  Invite collaborators via email with secure, encrypted access to your documents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Team Collaboration</h3>
                <p className="text-gray-600">Work together seamlessly with unlimited collaborators on any document.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Document Management</h3>
                <p className="text-gray-600">Create, organize, and share documents with powerful management tools.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Get started in 3 simple steps</h2>
            <p className="text-xl text-gray-600">Start collaborating in minutes, not hours</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">1. Sign Up</h3>
                <p className="text-gray-600">
                  Create your account with just your email address. No credit card required.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Plus className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">2. Create Document</h3>
                <p className="text-gray-600">
                  Start a new document or import existing ones. Begin writing immediately.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">3. Invite & Collaborate</h3>
                <p className="text-gray-600">
                  Share your document link and watch as your team joins the collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Loved by teams worldwide</h2>
            <p className="text-xl text-gray-600">See what our early users are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  &quot;I dont&apos;t have any real reviews here, so I write some using ChatGPT, itna to chalta hai na: 🙂🙂&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Aviral Mishra</p>
                    <p className="text-sm text-gray-600">Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  &quot;Finally, a collaborative editor that just works. No lag, no conflicts, just smooth writing with my
                  team.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marcus Rodriguez</p>
                    <p className="text-sm text-gray-600">Lead Developer, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  &quos;The cursor tracking feature is amazing. We can see exactly where everyone is working in real-time.&quos;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex Thompson</p>
                    <p className="text-sm text-gray-600">Technical Writer, DevTools Inc</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">🎉 Free Forever Plan Available</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Start collaborating today</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Begin with our generous free plan, upgrade when you need more power
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-12 py-6"
              >
                <Link href="https://www.github.com/aviralm52" target="_blank">
                  Want to collaborate 😶‍🌫️
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2">
                View Pricing Plans
              </Button> */}
            </div>
            <p className="text-sm text-gray-500">
              ✓ No credit card required ✓ Unlimited documents ✓ Up to 5 collaborators free
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">WriteSync</span>
              </div>
              <p className="text-gray-400">The future of collaborative writing. Write together, instantly.</p>
              <div className="flex space-x-4">
                <Link href="https://www.github.com/aviralm52" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/aviralm52" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/aviral7598?igsh=NjJqa3A2d3FvdXU0" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://drive.google.com/file/d/19OxVaFOCvPmI5ITcnEEOOItcKv324WL5/view?usp=drivesdk" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <FileText className=" w-5 h-5" />
                </Link>

              </div>
            </div>

            <div className="space-y-4 flex flex-col items-center">
              <h4 className="text-lg font-semibold">Product</h4>
              <div className="flex items-center gap-x-16">
                <Link href="#features" className="block text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
                <Link href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">
                  Reviews
                </Link>
                {/* <Link href="#pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Collaborate
                </Link> */}
              </div>
            </div>

            {/* <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div> */}

            {/* <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  GDPR
                </Link>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WriteSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default page





// import { ArrowLeftCircle } from "lucide-react";
// export default function Home() {
//   return (
//     <main className=" flex space-x-2 items-center animate-pulse">
//       <ArrowLeftCircle className=" w-12 h-12" />
//       <h1 className=" font-bold">Get Started with creating a New Document</h1>
//     </main>
//   );
// }
