import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactWindow = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-4 h-4 text-primary" />
          <span>minzayarmaung.dev2002@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone className="w-4 h-4 text-primary" />
          <span>+959-422659650</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Yangon , Myanmar (Burma) </span>
        </div>
      </div>

      <form
        className="space-y-4 pt-4"
        action="mailto:minzayarmaung.dev2002@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <div>
          <Input name="name" placeholder="Your Name" className="bg-secondary border-border" />
        </div>
        <div>
          <Input type="email" name="email" placeholder="Your Email" className="bg-secondary border-border" />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            className="bg-secondary border-border min-h-[100px] resize-none"
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
          Send Message
        </Button>
      </form>
    </div>
  );
};
