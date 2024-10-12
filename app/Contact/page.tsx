"use client";
import Link from "next/link";

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
          <h2 className="text-5xl font-bold">How Can We Help?</h2>
          <p className="text-2xl text-muted-foreground">
            Our team is here to assist you with any questions or concerns you
            may have. Feel free to reach out to us using the contact form or by
            visiting our office.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-muted p-3 rounded-full">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <Link href="tel:+15713538818">
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p className="text-xl text-muted-foreground">
                  +1 (571) 353-8818
                </p>
              </Link>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-muted p-3 rounded-full">
                <MailIcon className="h-6 w-6" />
              </div>
              <Link href="mailto:lagerdigitalmarketing@gmail.com">
                <h3 className="text-2xl font-semibold">Email</h3>
                <p className="text-xl text-muted-foreground">
                  lagerdigitalmarketing@gmail.com
                </p>
              </Link>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-muted p-3 rounded-full">
                <LocateIcon className="h-6 w-6" />
              </div>
              <Link href="https://maps.app.goo.gl/ZbR2aBbQgK8Z7YGZ8">
                <h3 className="text-2xl font-semibold">Address</h3>
                <p className="text-xl text-muted-foreground">
                  Woodbridge, VA United States
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49864.68478745068!2d-77.29961409629601!3d38.63639777563836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65593c31c6ffb%3A0x72326e8a35e46e0!2sWoodbridge%2C%20VA%2022191%2C%20USA!5e0!3m2!1sen!2set!4v1728674669794!5m2!1sen!2set"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
