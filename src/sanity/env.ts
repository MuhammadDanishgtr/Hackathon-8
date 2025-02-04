// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET = 'production',
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID= '6dx88lag',
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }

// export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17';

// const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

// const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6dx88lag',
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )


// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined || v === '') {
//     throw new Error(errorMessage);
//   }
//   return v;
// }

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6dx88lag';
export const token = process.env.SANITY_AUTH_TOKEN || 'skxkO0KEGSPzt6PMkUZttWqfxA4SbtR6tXWhvH8LBSKtL98K1zKf47hnwKV6NunlCL6aAqLjFdq5TOqh1Ig2dlviFFO94qMsyGfKm1fhrQd4hrOkkZcBSB6TDux61nUWurWr8XxFgn9FBhd1xR99dynSic3FRR8KXW43rer4C8UMUBxZz1hn';

export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
