import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center gap-4 mb-2 px-6 bg-slate-900 text-white">
      <div className="flex justify-start">
        <Sheet>
          <SheetTrigger>
            <Button size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side={"left"}>
            <SheetTitle className="mb-4">Outras informações</SheetTitle>

            <div className="mt-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="/">
                  <Button variant="outline">Temperatura</Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/cep">
                  <Button variant="outline">Cep</Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex justify-center">Location temperature</div>
    </div>
  );
};

export default Header;
