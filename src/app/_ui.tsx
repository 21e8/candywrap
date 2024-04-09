"use client";
import Image from "next/image";
import {
  useAccount,
  useBalance,
  useChainId,
  useChains,
  useSwitchChain,
} from "wagmi";
import { IDS, LOGOS, NAMES, SUPPORTED_CHAINS, SYMBOLS } from "./_constants";
import { formatEther, parseEther } from "viem";
import { useWethBalance, useWriteUnwrapWeth, useWriteWrapWeth } from "./_hooks";
import { useEffect, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useRouter, usePathname } from "next/navigation";

export default function Ui({ chain }: { chain: string }) {
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
      <div className="dropdown mt-3 mb-8 w-[200px]">
        <div tabIndex={0} role="button" className="btn m-1 w-full">
          <div className="w-full grid grid-cols-1-4-1 items-center">
            <Image
              src={LOGOS[chainId]}
              className="rounded-full mr-4"
              alt="Chain"
              width={24}
              height={24}
            />

            <span className="w-full text-center">{currentChain?.name}</span>

            <div className="flex flex-row justify-end items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
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
      <div className="card max-w-96 w-full bg-base-100 shadow-xl mb-3">
        <div className="card-body">
          <h2 className="card-title mb-6 w-full text-center block">
            Wrap {balance.data?.symbol || SYMBOLS[IDS[chain]] || "ETH"}
          </h2>
          <p className="hidden">
            Wrap {balance.data?.symbol || SYMBOLS[IDS[chain]] || "ETH"} to W
            {balance.data?.symbol || SYMBOLS[IDS[chain]] || "ETH"}
          </p>
          <input
            value={inputEthAmount}
            onChange={(e) => setInputEthAmount(e.target.value)}
            className="input input-bordered"
            placeholder={formattedBalance}
          />
          <div className="join mt-2">
            <button
              onClick={() =>
                setInputEthAmount(
                  (
                    Number(formatEther(balance.data?.value || BigInt(0))) * 0.25
                  ).toString()
                )
              }
              className="btn btn-accent btn-outline join-item w-1/3"
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
              className="btn btn-accent btn-outline join-item w-1/3"
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
              className="btn btn-accent btn-outline join-item w-1/3"
            >
              100%
            </button>
          </div>
          <button
            onClick={() => handleWriteWrap()}
            disabled={!inputEthAmount}
            className="btn mt-6 btn-primary border-2 border-primary hover:border-base-100 hover:ring-2 hover:ring-primary"
          >
            Wrap
          </button>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 my-3 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
        />
      </svg>

      <div className="card max-w-96 w-full bg-base-100 shadow-xl mt-3 mb-6">
        <div className="card-body">
          <h2 className="card-title mb-6 w-full text-center block">
            Unwrap {balance.data?.symbol || SYMBOLS[IDS[chain]] || "ETH"}
          </h2>
          <p className="hidden">
            Unwrap W{balance.data?.symbol || SYMBOLS[IDS[chain]] || "ETH"} to
            {balance.data?.symbol || SYMBOLS[IDS[chain]] || "ETH"}
          </p>
          <input
            value={inputWethAmount}
            onChange={(e) => setInputWethAmount(e.target.value)}
            className="input input-bordered"
            placeholder={formattedWethBalance}
          />
          <div className="join mt-2">
            <button
              onClick={() =>
                setInputWethAmount(
                  (
                    Number(formatEther(wethBalance.data || BigInt(0))) * 0.25
                  ).toString()
                )
              }
              className="btn btn-accent btn-outline join-item w-1/3"
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
              className="btn btn-accent btn-outline join-item w-1/3"
            >
              50%
            </button>
            <button
              onClick={() =>
                setInputWethAmount(
                  Number(formatEther(wethBalance.data || BigInt(0))).toString()
                )
              }
              className="btn btn-accent btn-outline join-item w-1/3"
            >
              100%
            </button>
          </div>
          <button
            onClick={handleWriteUnwrap}
            disabled={!inputWethAmount}
            className="btn mt-6 btn-primary border-2 border-primary hover:border-base-100 hover:ring-2 hover:ring-primary"
          >
            Unwrap
          </button>
        </div>
      </div>
    </>
  );
}
