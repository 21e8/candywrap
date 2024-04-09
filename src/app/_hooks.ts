import { useQueryClient } from "@tanstack/react-query";
import {
  useAccount,
  useChainId,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { SUPPORTED_CHAIN_IDS, WETH_ADDRESSES } from "./_constants";
import { WETH_ABIS } from "./_abis";
import { useEffect } from "react";
import { TypedContractRead } from "@/types/typed-contract-read";

export function useWriteUnwrapWeth({ amountWei }: { amountWei: bigint }) {
  const { address } = useAccount();
  const query_client = useQueryClient();
  const chainId = useChainId();
  const {
    data: hash,
    isPending,
    writeContract,
    isError,
    error,
    failureReason,
  } = useWriteContract();
  const { isLoading, isSuccess, isLoadingError } = useWaitForTransactionReceipt(
    { hash }
  );

  function handleWrite() {
    if (!SUPPORTED_CHAIN_IDS.includes(chainId)) {
      alert("Please switch to a supported network");
      return;
    }
    if (!address) return;
    writeContract({
      address: WETH_ADDRESSES[chainId],
      abi: WETH_ABIS[chainId],
      functionName: "withdraw",
      args: [amountWei],
      account: address,
    });
  }

  useEffect(() => {
    if (!isSuccess) return;
    query_client.invalidateQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return {
    handleWrite,
    isPending,
    isLoading,
    isSuccess,
    isError,
    error,
    isLoadingError,
    failureReason,
  };
}
export function useWriteWrapWeth({ amountWei }: { amountWei: bigint }) {
  const { address } = useAccount();
  const query_client = useQueryClient();
  const chainId = useChainId();
  const {
    data: hash,
    isPending,
    writeContract,
    isError,
    error,
    failureReason,
  } = useWriteContract();
  const { isLoading, isSuccess, isLoadingError } = useWaitForTransactionReceipt(
    { hash }
  );

  console.log({ hash, isPending, isSuccess, isLoading, isLoadingError, error, failureReason })

  function handleWrite() {
    if (!SUPPORTED_CHAIN_IDS.includes(chainId)) {
      alert("Please switch to a supported network");
      return;
    }
    if (!address) return;
    writeContract({
      address: WETH_ADDRESSES[chainId],
      abi: WETH_ABIS[chainId],
      functionName: "deposit",
      args: [],
      value: amountWei,
      account: address,
    });
  }

  useEffect(() => {
    if (!isSuccess) return;
    query_client.invalidateQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return {
    handleWrite,
    isPending,
    isLoading,
    isSuccess,
    isError,
    error,
    isLoadingError,
    failureReason,
  };
}

export const useWethBalance = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  return useReadContract({
    address: WETH_ADDRESSES[chainId],
    abi: WETH_ABIS[chainId],
    functionName: "balanceOf",
    args: [address || "0x0"],
    chainId: chainId,
    query: {
      refetchInterval: 15000,
      retry: 0,
    },
  }) as TypedContractRead<bigint>;
};
