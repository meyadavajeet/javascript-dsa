//What is satisfies?

// satisfies checks whether an object matches a type while preserving the object's original inferred type.

type ProductStatus = "available" | "outofstock" | "refund";

type StatusInfo = {
  label: string;
  canBuy: boolean;
};

const productStatusInfo = {
  available: {
    label: "label1",
    canBuy: false,
  },
  outofstock: {
    label: "out of stock",
    canBuy: false,
  },
  refund: {
    label: "refund",
    canBuy: true,
  },
} satisfies Record<ProductStatus, StatusInfo>;
