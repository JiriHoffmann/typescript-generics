// @ts-ignore
import {NumberFragment } from "./NumberFragment";

export const couponTypes = ["code", "grant"] as const;
export type CouponType = typeof couponTypes[number];

export const couponGrants = ["newUser", "referral"] as const;
export type CouponGrant = typeof couponGrants[number];

export type Coupon<T extends CouponType = CouponType> = Readonly<{
  type: T;
  discount: NumberFragment;
  usageMaximum: number | undefined;
} & (
  T extends "code" ? {
    code: string;
    expiresAt: Date;
  } : { }
) & (
  T extends "grant" ? {
    expiresAfterDays: number;
    grants: ReadonlyArray<CouponGrant>;
  } : { }
)>;

export function isCouponOfType<T extends CouponType>(
  coupon: Coupon,
  type: T,
): coupon is Coupon<T> {
  return coupon.type === type;
}


// Another solution

export type BaseCoupon = {
    discount: NumberFragment;
    usageMaximum: number | undefined;
}

export type CodeCoupon = BaseCoupon & {
    type: "code";
    code: string;
    expiresAt: Date;
}

export type GrantCoupon = BaseCoupon & {
    type: "grant";
    expiresAfterDays: number;
    grants: ReadonlyArray<CouponGrant>;
}

export type Coupon2 = Readonly<CodeCoupon | GrantCoupon>

const coupon: Coupon2 = {
    type: "code",
    discount: {
        amount: 10,
        currency: "USD"
    },
    usageMaximum: 10,
    code: "123",
    expiresAt: new Date()
}

const isCode = (coupon: Coupon2): coupon is CodeCoupon => coupon.type === "code"

const couponTest = (coupon: Coupon2) => {
    if (isCode(coupon)) {
        return coupon.code
    } 
    return coupon.grants.join(", ")
}

const couponTest2 = (coupon: Coupon2) => {
    if ("code" in coupon) {
        return coupon.code
    } 
    return coupon.grants.join(", ")
}