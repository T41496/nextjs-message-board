import { MainLayout } from "@/src/layouts/Layout";
import { NumberForm, NumberTable } from "@/src/components";

export const NumbersContainer = () => {
  return (
    <MainLayout>
      <h1>Numbers</h1>
      <NumberForm />
      <NumberTable />
    </MainLayout>
  );
};
