export function useCharacterCount(value: string | undefined, maxLength: number) {
     const count = value?.length ?? 0
     const remaining = maxLength - count
     return {
       count,
       remaining,
       isWarning: remaining <= 50 && remaining > 0,
       isError: remaining <= 0,
     }
   }