import * as Dialog from "@radix-ui/react-dialog";
import budgetImg from "../assets/budget-img.png";
import { modalData } from "./data";
import { Fragment } from "react/jsx-runtime";
interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export function BudgetingModal({ isOpen, setIsOpen }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed z-40 inset-0 bg-black/50 opacity-45"
          onClick={() => setIsOpen(false)}
        />
        <Dialog.Content className="fixed z-50 w-[310px] sm:w-[478px] left-1/2  !rounded-2xl top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  shadow-lg">
          <Dialog.Title className="text-lg font-semibold w-full">
            <img
              src={budgetImg}
              alt="budget"
              className="rounded-t-2xl w-full"
            />
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600 !rounded-2xl p-4 xl:py-6 xl:px-13">
            <div className="flex items-center flex-col gap-6 ">
              {modalData?.map((item, index) => (
                <Fragment key={index}>
                  <ModalItem {...item} />
                </Fragment>
              ))}
            </div>
            <button className="rounded-full !font-ecb mt-6 outline-none border-none bg-[#18181B] text-white p-3 w-full">
              Create Budget
            </button>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const ModalItem = ({
  title,
  sub,
  img,
}: {
  title: string;
  sub: string;
  img: string;
}) => {
  return (
    <div className="flex items-center gap-3 !font-ecb">
      <img src={img} />
      <div className="flex items-start flex-col gap-1">
        <p className="text-pri-black font-semibold">{title}</p>
        <p className="text-[12px] text-[#606060]">{sub}</p>
      </div>
    </div>
  );
};
