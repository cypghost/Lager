import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Contact() {
  return (
    <div className="w-full p-4 py-16 md:py-24 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-2 rounded-full text-secondary bg-primary transition-all duration-300">
          Contact Us
        </div>
        <p className="text-4xl md:text-6xl font-medium">Get in Touch</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 p-8 border shadow-lg rounded-lg">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">How Can We Help?</h2>
          <p className="text-muted-foreground">
            Our team is here to assist you with any questions or concerns you
            may have. Feel free to reach out to us using the contact form or by
            visiting our office.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-muted p-3 rounded-full">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-muted p-3 rounded-full">
                <MailIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">info@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-muted p-3 rounded-full">
                <LocateIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  123 Main Street, Anytown USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/placeholder.svg"
            alt="Contact Image"
            className="w-full h-full object-cover rounded-2xl"
            width="600"
            height="400"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 py-12">
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d-122.42022568467937!3d37.77493537975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a8d6c1b1%3A0x2a00c5b28c6e78c2!2sVercel%20HQ!5e0!3m2!1sen!2sus!4v1682874400000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="min-h-[120px]"
              />
            </div>
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 font-semibold rounded-md bg-primary text-secondary hover:text-accent hover:bg-destructive transition-all duration-300">
              Send Message
              <FiArrowRight className="ml-2 animate-bounce" size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function LocateIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
