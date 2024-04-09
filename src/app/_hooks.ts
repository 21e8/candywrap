import { useQueryClient } from "@tanstack/react-query";
import { blast, mainnet } from "viem/chains";
import {
  useAccount,
  useChainId,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { WETH_ADDRESSES } from "./_constants";
import { WETH_ABIS } from "./_abis";
import { useEffect } from "react";


const supportedChains = [mainnet.id, blast.id] as number[];
export function useWriteWrapWethBlast({ amountWei }: { amountWei: bigint }) {
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
    if (supportedChains.includes(chainId) === false) {
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
