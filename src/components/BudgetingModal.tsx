import * as Dialog from "@radix-ui/react-dialog";

export function BudgetingModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Modal
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
          <Dialog.Title className="text-lg font-semibold">
            Modal Title
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            This is a Radix modal styled with Tailwind.
          </Dialog.Description>
          <Dialog.Close className="mt-4 px-4 py-2 bg-gray-200 rounded">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
