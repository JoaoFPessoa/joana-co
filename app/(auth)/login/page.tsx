import { Card, CardContent } from "@/components/ui/card";
import AuthTabs from "./AuthTabs";

export default function LoginPage() {
  return (
    <Card className="border-0 flex  w-full md:mt-0  h-full ">
      <CardContent className="flex justify-center    flex-col gap-10 h-full">
        <h1 className="text-4xl font-bold text-center tracking-tight">
          Boas-vindas ao Joana.co*
        </h1>
        <AuthTabs />
      </CardContent>
    </Card>
  );
}
