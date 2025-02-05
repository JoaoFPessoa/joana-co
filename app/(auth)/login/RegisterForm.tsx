import { useState } from "react";
import { Input } from "@/components/ui/input";
import MainButton from "@/components/ui/mainButton";
import { Lock, Mail, User, Phone, FileText } from "lucide-react";

const fields = [
  {
    name: "name",
    label: "Nome",
    icon: User,
    type: "text",
    placeholder: "Seu nome completo",
  },
  {
    name: "cpf_cnpj",
    label: "CPF ou CNPJ",
    icon: FileText,
    type: "text",
    placeholder: "Digite seu CPF ou CNPJ",
  },
  {
    name: "phone",
    label: "Celular",
    icon: Phone,
    type: "tel",
    placeholder: "(XX) XXXXX-XXXX",
  },
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
  },
  {
    name: "confirmPassword",
    label: "Confirmar Senha",
    icon: Lock,
    type: "password",
    placeholder: "••••••••",
  },
];

export default function RegisterForm() {
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="space-y-3">
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
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="pl-10 pr-10 py-3.5 rounded-full border-secondary"
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        </div>
      ))}
      <MainButton className="!mt-4" onClick={handleSubmit}>
        Criar conta
      </MainButton>
    </div>
  );
}
