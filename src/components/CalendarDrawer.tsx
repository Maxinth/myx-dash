import { Drawer, DrawerContent } from "@/components/ui/drawer";
import CalendarView from "./CalendarView";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export function CalendarDrawer({ isOpen, setIsOpen }: Props) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DialogTitle></DialogTitle>
      <DrawerContent>
        <div className="flex-1 overflow-auto">
          <CalendarView isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
