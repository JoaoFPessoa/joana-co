"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainButton from "@/components/ui/mainButton";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useState } from "react";

const fields = [
  {
    name: "email",
    label: "E-mail",
    icon: Mail,
    type: "email",
    placeholder: "name@example.com",
  },
  {
    name: "password",
    label: "Senha",
    icon: Lock,
    type: "password",
    placeholder: "••••••••",
    showPassword: true,
  },
];

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form data: ", formData);
  };

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={index} className="space-y-2">
          <label className="text-sm font-medium text-gray-900">
            {field.label}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-3.5 text-gray-500">
              <field.icon className="h-4 w-4" />
            </div>
            <Input
              type={field.showPassword && showPassword ? "text" : field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="pl-10 pr-10 py-3.5 border-secondary rounded-full"
              value={formData[field.name]}
              onChange={handleChange}
            />
            {field.showPassword && (
              <button
                className="absolute right-4 top-3.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeClosed className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </div>
      ))}
      <MainButton onClick={handleSubmit}>Entrar</MainButton>
      <Button variant={"ghost"} className="w-full underline">
        Esqueci minha senha
      </Button>
    </div>
  );
}
