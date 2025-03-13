export const inputFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Name",
    name: "name",
    className: "h-[59px]",
  },

  {
    label: "Email*",
    type: "email",
    placeholder: "Email",
    name: "email",
    validation: { required: "Email is required" },
    className: "h-[59px]",
  },

  {
    label: "Message*",
    type: "textarea",
    placeholder: "Message",
    name: "message",
    validation: { required: "Message is required" },
    className: "h-[190px]",
  },
];

export const radioOptions = [
  {
    id: "say-hi",
    label: "Say Hi",
  },
  {
    id: "get-quote",
    label: "Get a Quote",
  },
];
