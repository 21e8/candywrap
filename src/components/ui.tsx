"use client";
import Image from "next/image";
import {
  useAccount,
  useBalance,
  useChainId,
  useChains,
  useSwitchChain,
} from "wagmi";
import {
  IDS,
  LOGOS,
  CHAIN_IDS,
  SUPPORTED_CHAINS,
  SYMBOLS,
} from "../util/constants";
import { formatEther, parseEther } from "viem";
import {
  useOutsideClick,
  useWethBalance,
  useWriteUnwrapWeth,
  useWriteWrapWeth,
} from "../util/hooks";
import { useEffect, useMemo, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useRouter, usePathname } from "next/navigation";
import { ArrowsUpDownIcon } from "./arrows-up-down-icon";
import { ChevronDownIcon } from "./chevron-down-icon";
import Link from "next/link";

export default function Ui({ chain }: { chain: string }) {
  const [inputEthAmount, setInputEthAmount] = useState("");
  const [inputWethAmount, setInputWethAmount] = useState("");
  const { switchChain } = useSwitchChain();
  const [dropdownVisible, setDropdownVisible] = useState(false);
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
  const ref = useOutsideClick(() => setDropdownVisible(false));
  const [searchString, setSearchString] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname !== `/${CHAIN_IDS[chainId]}`) {
      router.push(`/${CHAIN_IDS[chainId]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, pathname]);

  const actualSymbol = SYMBOLS[IDS[chain]] || SYMBOLS[chainId] || "ETH";

  const filteredChains = useMemo(() => {
    if (searchString.trim() === "")
      return SUPPORTED_CHAINS.filter((chain) => chain.id !== chainId);
    return SUPPORTED_CHAINS.filter((chain) => {
      return (
        chain.id !== chainId &&
        (chain.name.toLowerCase().includes(searchString.toLowerCase()) ||
          `${chain.id}`.toLowerCase().includes(searchString.toLowerCase()) ||
          chain.nativeCurrency.symbol
            .toLowerCase()
            .includes(searchString.toLowerCase()))
      );
    });
  }, [chainId, searchString]);

  return (
    <>
      <div className="h-[40px] connect-kit-container">
        <ConnectKitButton />
      </div>

      <div ref={ref as any} className="relative">
        <div className="w-full flex items-center justify-center my-4">
          <button
            className="btn flex flex-row justify-between w-[200px]"
            type="button"
            onClick={() => {
              setDropdownVisible(!dropdownVisible);
            }}
          >
            <div className="flex flex-row w-full items-center justify-between">
              <Image
                src={LOGOS[chainId]}
                className="rounded-full mr-4"
                alt="Chain"
                width={24}
                height={24}
              />
              <span className="w-full text-center">{currentChain?.name}</span>
              <ChevronDownIcon className="w-4 h-4 ms-3" />
            </div>
          </button>
          <div
            className={`z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 absolute top-[4.5rem] ${
              dropdownVisible ? "" : "hidden"
            }`}
          >
            <div className="p-3">
              <label htmlFor="input-group-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-secondary focus:border-secondary dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
                  placeholder="Search chain"
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
              </div>
            </div>
            {filteredChains.length ? (
              <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                {filteredChains.map((chain) => (
                  <li
                    onClick={() => {
                      setDropdownVisible(false);
                      switchChain({ chainId: chain.id });
                      setSearchString("");
                    }}
                    key={chain.id}
                  >
                    <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                      <Image
                        src={LOGOS[chain.id]}
                        className="rounded-full"
                        alt="Chain"
                        width={24}
                        height={24}
                      />
                      <label className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">
                        {chain.name}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="card max-w-96 w-full bg-base-100 shadow-xl mb-3">
        <div className="card-body">
          <h2 className="card-title mb-6 w-full text-center block">
            Wrap {actualSymbol}
          </h2>
          <p className="hidden">
            Wrap {actualSymbol} to w{actualSymbol}
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
              className="btn btn-secondary btn-outline join-item w-1/3"
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
              className="btn btn-secondary btn-outline join-item w-1/3"
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
              className="btn btn-secondary btn-outline join-item w-1/3"
            >
              100%
            </button>
          </div>
          <button
            onClick={() => handleWriteWrap()}
            disabled={!inputEthAmount}
            className="btn mt-6 btn-warning border-2 border-warning hover:border-base-100 hover:ring-2 hover:ring-warning"
          >
            Wrap
          </button>
        </div>
      </div>

      <div className="bg-accent my-4 text-black rounded-full h-16 w-16 flex items-center justify-center">
        <ArrowsUpDownIcon className="w-12 h-12 my-3" />
      </div>

      <div className="card max-w-96 w-full bg-base-100 shadow-xl mt-3 mb-6">
        <div className="card-body">
          <h2 className="card-title mb-6 w-full text-center block">
            Unwrap w{actualSymbol}
          </h2>
          <p className="hidden">
            Unwrap w{actualSymbol} to
            {actualSymbol}
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
              className="btn btn-secondary btn-outline join-item w-1/3"
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
              className="btn btn-secondary btn-outline join-item w-1/3"
            >
              50%
            </button>
            <button
              onClick={() =>
                setInputWethAmount(
                  Number(formatEther(wethBalance.data || BigInt(0))).toString()
                )
              }
              className="btn btn-secondary btn-outline join-item w-1/3"
            >
              100%
            </button>
          </div>
          <button
            onClick={handleWriteUnwrap}
            disabled={!inputWethAmount}
            className="btn mt-6 btn-warning border-2 border-warning hover:border-base-100 hover:ring-2 hover:ring-warning"
          >
            Unwrap
          </button>
        </div>
        <div className="hidden">
          {SUPPORTED_CHAINS.map((chain) => {
            return (
              <Link href={`/${CHAIN_IDS[chain.id]}`} key={chain.id}>
                {chain.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
