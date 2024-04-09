"use client";
import Image from "next/image";
import {
  useAccount,
  useBalance,
  useChainId,
  useChains,
  useSwitchChain,
} from "wagmi";
import { LOGOS, NAMES, SUPPORTED_CHAINS } from "./_constants";
import { formatEther, parseEther } from "viem";
import { useWethBalance, useWriteUnwrapWeth, useWriteWrapWeth } from "./_hooks";
import { useEffect, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useRouter, usePathname } from "next/navigation";

export default function Ui() {
  const [inputEthAmount, setInputEthAmount] = useState("");
  const [inputWethAmount, setInputWethAmount] = useState("");
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const { address } = useAccount();
  const chains = useChains();
  const balance = useBalance({ address });
  const formattedBalance = formatEther(balance.data?.value || BigInt(0));
  const currentChain = chains.find((chain) => chain.id === chainId);
  const wethBalance = useWethBalance();
  const formattedWethBalance = formatEther(wethBalance.data || BigInt(0));
  const { handleWrite: handleWriteWrap } = useWriteWrapWeth({
    amountWei: parseEther(inputEthAmount),
  });
  const { handleWrite: handleWriteUnwrap } = useWriteUnwrapWeth({
    amountWei: parseEther(inputWethAmount),
  });
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname !== `/${NAMES[chainId]}`) {
      router.push(`/${NAMES[chainId]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, pathname]);
  return (
    <>
      <ConnectKitButton />
      <div className="dropdown w-[200px]">
        <div tabIndex={0} role="button" className="btn m-1 w-full">
          <Image
            src={LOGOS[chainId]}
            className="rounded-full"
            alt="Chain"
            width={24}
            height={24}
          />

          {currentChain?.name}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content border border-base-300 z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52"
        >
          {SUPPORTED_CHAINS.map((chain) => (
            <li
              onClick={() => switchChain({ chainId: chain.id })}
              key={chain.id}
              className="flex"
            >
              <a>
                <Image
                  src={LOGOS[chain.id]}
                  className="rounded-full"
                  alt="Chain"
                  width={24}
                  height={24}
                />
                <h2 className="font-bold">{chain.name}</h2>

                {chainId === chain.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl my-3">
        <div className="card-body">
          <h2 className="card-title">Wrap {balance.data?.symbol}</h2>
          <p>
            Wrap {balance.data?.symbol || "ETH"} to W
            {balance.data?.symbol || "ETH"}
          </p>
          <input
            value={inputEthAmount}
            onChange={(e) => setInputEthAmount(e.target.value)}
            className="input input-bordered"
            placeholder={formattedBalance}
          />
          <div className="join">
            <button
              onClick={() =>
                setInputEthAmount(
                  (
                    Number(formatEther(balance.data?.value || BigInt(0))) * 0.25
                  ).toString()
                )
              }
              className="btn join-item w-1/3"
            >
              25%
            </button>
            <button
              onClick={() =>
                setInputEthAmount(
                  (
                    Number(formatEther(balance.data?.value || BigInt(0))) * 0.5
                  ).toString()
                )
              }
              className="btn join-item w-1/3"
            >
              50%
            </button>
            <button
              onClick={() =>
                setInputEthAmount(
                  Number(
                    formatEther(balance.data?.value || BigInt(0))
                  ).toString()
                )
              }
              className="btn join-item w-1/3"
            >
              100%
            </button>
          </div>
          <button
            onClick={() => handleWriteWrap()}
            disabled={!inputEthAmount}
            className="btn btn-primary"
          >
            Wrap
          </button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Unwrap {balance.data?.symbol || "ETH"}</h2>
          <p>
            Unwrap W{balance.data?.symbol || "ETH"} to{" "}
            {balance.data?.symbol || "ETH"}
          </p>
          <input
            value={inputWethAmount}
            onChange={(e) => setInputWethAmount(e.target.value)}
            className="input input-bordered"
            placeholder={formattedWethBalance}
          />
          <div className="join">
            <button
              onClick={() =>
                setInputWethAmount(
                  (
                    Number(formatEther(wethBalance.data || BigInt(0))) * 0.25
                  ).toString()
                )
              }
              className="btn join-item w-1/3"
            >
              25%
            </button>
            <button
              onClick={() =>
                setInputWethAmount(
                  (
                    Number(formatEther(wethBalance.data || BigInt(0))) * 0.5
                  ).toString()
                )
              }
              className="btn join-item w-1/3"
            >
              50%
            </button>
            <button
              onClick={() =>
                setInputWethAmount(
                  Number(formatEther(wethBalance.data || BigInt(0))).toString()
                )
              }
              className="btn join-item w-1/3"
            >
              100%
            </button>
          </div>
          <button
            onClick={handleWriteUnwrap}
            disabled={!inputWethAmount}
            className="btn btn-primary"
          >
            Unwrap
          </button>
        </div>
      </div>
    </>
  );
}
