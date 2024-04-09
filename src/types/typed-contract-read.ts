import { QueryKey, QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ReadContractErrorType } from "viem";

export type Refetch =  (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<unknown, ReadContractErrorType>>;
/**
 * Helper type for useReadContract return a typed object.
 * It might be possible to type useReadContract directly, so if
 * we find out how to get rid of this we should.
 */
export type TypedContractRead<T> = {
  data: T | undefined;
  refetch: Refetch;
  queryKey: QueryKey;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};
