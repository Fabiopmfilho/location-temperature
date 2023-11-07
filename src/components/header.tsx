import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <div className="flex items-center gap-4 mb-2 px-6 bg-slate-900 text-white">
      <div className="flex justify-start">
        <Sheet>
          <SheetTrigger>
            <Button>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetTitle className="mb-4">Outras informações</SheetTitle>

            <Button variant="outline">Cep information</Button>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex justify-center">Location temperature</div>
    </div>
  );
};

export default Header;
