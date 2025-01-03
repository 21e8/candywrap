import { useQueryClient } from "@tanstack/react-query";
import {
  useAccount,
  useChainId,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { SUPPORTED_CHAIN_IDS, WETH_ADDRESSES } from "./constants";
import { useEffect, useRef } from "react";
import { WRAP_ABI } from "./abi";

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
      abi: WRAP_ABI,
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

  function handleWrite() {
    if (!SUPPORTED_CHAIN_IDS.includes(chainId)) {
      alert("Please switch to a supported network");
      return;
    }
    if (!address) return;
    writeContract({
      address: WETH_ADDRESSES[chainId],
      abi: WRAP_ABI,
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
    abi: WRAP_ABI,
    functionName: "balanceOf",
    args: [address || "0x0"],
    chainId: chainId,
    query: {
      refetchInterval: 15000,
      retry: 0,
    },
  });
};

export const useOutsideClick = (callback: Function) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handleClick = (_event: any) => {
      if (ref.current && !ref.current.contains(_event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};
