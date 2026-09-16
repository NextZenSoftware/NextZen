export const paymentPlans = {
  starter: {
    name: "Starter Website",
    amount: 35000,
  },
  growth: {
    name: "Growth Platform",
    amount: 125000,
  },
  scale: {
    name: "Scale & Cloud",
    amount: 350000,
  },
} as const

export type PaymentPlanId = keyof typeof paymentPlans

export function getPaymentPlan(value: unknown) {
  if (typeof value !== "string" || !(value in paymentPlans)) {
    return null
  }

  return paymentPlans[value as PaymentPlanId]
}
