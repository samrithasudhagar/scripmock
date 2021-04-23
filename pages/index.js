import Nav from "../components/nav";
import { ReactQueryDevtools } from "react-query-devtools";
import { useQuery } from "react-query";
import React, { useState, useEffect } from "react";
const axios = require("axios").default;
import Pagination from "react-js-pagination";
import cx from "classnames";
export default function App() {
  return (
    <>
      <IndexPage />
      <ReactQueryDevtools />
    </>
  );
}
function IndexPage() {
  const [val, setval] = useState(5000);
  const [toggle, setToggle] = useState("Equity");
  const [activePage, setActivePage] = useState(1);
  const [filter, setFilter] = useState("basic");
  const [startValue, setStartValue] = useState(0);
  const [filterclick, setFilterclick] = useState("");
  const { data, refetch } = useQuery("latest", getStaticProps, {
    variables: { filterclick }
  });
  const bodyfunc = () => {
    return {
      q: filterclick,
      from: startValue,
      size: 20
    };
  };
  useEffect(() => {
    refetch();
  }, [startValue, filterclick]);
  console.log(filterclick);
  async function getStaticProps() {
    const { data } = await await axios.post(
      `https://apus.scripbox.com/api/v1/search`,
      bodyfunc()
    );
    const initialFundsList = await data;
    return initialFundsList;
  }
  return (
    <div>
      <Nav />
      <section class="bg-gray">
        <div className="max-w-6xl px-6 pt-20 pb-6 mx-auto lg:px-4 sm:pt-5">
          <div class="flex  items-center sm:hidden">
            <img src="./" />
            <span class="pl-3 pr-3">></span>
            <p class="bg-white text-xs text-font font-thin">Mutual Funds</p>
          </div>

          <div>
            <h2 class="font-bold text-4xl sm:text-xl">Mutual Funds</h2>
            <p class="text-lg text-fontgrey font-thin max-w-lg sm:hidden">
              Invest in the best mutual funds recommended by Scripbox that are
              algorithmically selected that best suit your needs.
            </p>
          </div>
          <div class="flex space-x-8 pt-3 overflow-x-scroll pl-1 pb-5">
            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="w-10 h-10 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 34 46"
                id="growth-fund-filters"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.207 1c-2.384 0-4.915.813-6.634 3.182-1.068 1.47-1.828 3.625-2.233 6.485-1.914.662-3.157 1.851-3.781 3.515-.613 1.633-.67 3.406-.143 5.32-.97 1.612-1.51 3.011-1.654 4.186-.23 1.86.106 4.235.575 5.823.767 2.598 2.085 4.961 3.826 6.622 1.641 1.565 3.654 2.515 5.944 2.515h7.828c3.162 0 5.878-2.705 7.558-4.692 1.86-2.2 2.9-4.783 2.9-9.777 0-2.633-.888-4.685-2.625-6.18.412-4.184-.173-7.085-1.562-8.79-1.075-1.32-2.22-2.202-3.414-2.677-.26-2.152-1.198-3.66-2.728-4.582C19.865 1.227 18.68 1 17.207 1z"
                  fill="#ACE0A2"
                  stroke="#54894A"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M16.986 44.91V20.53M1 45.084h31.982M20.935 22.277l-3.949 4.856M12.482 25.783l4.51 3.903v5.603l5.514-6.754"
                  stroke="#54894A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="text-green1 bg-bggreen1 text-xs absolute right-0 top-0 mt-4 px-2 py-1">
                5+ years
              </span>
              <h4 class="font-semibold text-base pb-1">Long Term Funds</h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Top equity mutual funds for long-term goals
              </p>
            </div>
            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 44 43"
                id="coin-fund-filters"
              >
                <path
                  d="M18.876 41.694c9.872 0 17.876-8.004 17.876-17.876 0-9.873-8.004-17.876-17.876-17.876C9.003 5.942 1 13.945 1 23.818c0 9.872 8.003 17.876 17.876 17.876z"
                  fill="#FFE1A8"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M30.902 4.165h6.33M34.066 1v6.33M39.438 12.469H43M41.219 10.687v3.563"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M21.585 34.135l-7.97-9.389h1.68c3.473 0 6.29-1.83 6.29-4.647s-2.817-4.647-6.29-4.647h-1.68"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.607 20.107h10.788M13.61 15.443h10.787"
                  stroke="#B77A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="bg-bgyellow1 text-xs absolute right-0 top-0 mt-4 px-2 py-1 text-mustard">
                1-5 years
              </span>
              <h4 class="font-semibold text-base pb-1 pt-1">
                Short Term Funds
              </h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Beat FD returns with the best debt mutual funds
              </p>
            </div>
            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 37 42"
                id="tax-saving-fund-filters"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.174 41.15c-.598 0-1.14-.246-1.535-.64A2.167 2.167 0 011 38.976V2.086l2.956 1.478L7.086 2l3.128 1.564L13.343 2l3.129 1.564L19.6 2l3.129 1.564L25.859 2l3.129 1.564 2.955-1.477-.079 37.16c-.108.132-.302.236-.587.352-.803.33-2.156.606-4.408.843-4.207.443-11.403.708-23.695.708z"
                  fill="#fff"
                  stroke="#5890DA"
                  stroke-width="1.5"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 33.324H5.373v5.078c0 1.572-.65 2.744-2.304 2.744h31.368a1.57 1.57 0 001.565-1.564v-6.258z"
                  fill="#8DBFFF"
                  stroke="#5890DA"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M11.216 24.23L23.95 11.36"
                  stroke="#5890DA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M18.652 21.802a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zM16.576 9.949a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z"
                  stroke="#5890DA"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span class="text-bleu bg-bgbleu text-xs absolute right-0 top-0 mt-4 px-2 py-1">
                Lowest lock-in
              </span>
              <h4 class="font-semibold text-base pb-1 pt-1">
                Tax Saving Funds
              </h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Beat FD returns with the best debt mutual funds
              </p>
            </div>

            <div class="bg-white w-48 px-3 py-3 shadow-sm rounded-md mt-4 relative flex-shrink-0 cursor-pointer hover:bg-hoverbg  ">
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 49 37"
                id="emergency-fund-filters"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.361 27.854a.33.33 0 00-.323.383l1.162 6.78a1.182 1.182 0 001.166.983h2.845a1.182 1.182 0 001.168-.998l1.066-6.769a.335.335 0 00-.093-.284.33.33 0 00-.234-.097l-6.757.002zM30.152 27.854a.329.329 0 00-.323.383l1.165 6.78a1.182 1.182 0 001.165.983h2.716a1.182 1.182 0 001.166-.981l1.17-6.781a.331.331 0 00-.324-.384h-6.735z"
                  fill="#FFBDBD"
                  stroke="#B26868"
                  stroke-width="1.5"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.499 1.018l3.649.636a2.471 2.471 0 012.042 2.26l.062.878a25.992 25.992 0 019.874-1.786c10.375 0 18.79 5.069 18.79 14.467 0 9.399-8.413 14.454-18.79 14.454-9.085 0-16.665-3.76-18.41-11.102l-3.831-1.324A1.313 1.313 0 011 18.259v-2.713a1.314 1.314 0 01.893-1.246l4.182-1.414A12.354 12.354 0 019.169 8.05a2.455 2.455 0 01-1.101-1.512l-.98-4.008a1.236 1.236 0 011.41-1.512z"
                  fill="#FFBDBD"
                  stroke="#B26868"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M11.623 14.046a1.446 1.446 0 100-2.89 1.446 1.446 0 000 2.89z"
                  fill="#C56565"
                ></path>
                <path
                  d="M20.29 5.938a27.144 27.144 0 018.662.1M42.914 12.886c2.447-.608 4.04-.111 4.778 1.492"
                  stroke="#B26868"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="text-pink bg-bgpink text-xs absolute right-0 top-0 mt-4 px-2 py-1">
                Under 1 year
              </span>
              <h4 class="font-semibold text-base pb-1">Emergency Funds</h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Beat FD returns with the best debt mutual funds
              </p>
            </div>
            <div class=" w-48 px-3 py-3 mt-4 relative flex-shrink-0  bg-bggrey rounded-md">
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                id="down-arrow-rounded"
              >
                <circle cx="24" cy="24" r="24" fill="#E6E6E6"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.708 24.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L23 28.586V17a1 1 0 112 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  fill="#737373"
                ></path>
              </svg>
              <h4 class="font-semibold text-base pb-1">See all equity funds</h4>
              <p class="max-w-xs text-xs text-fontclr font-thin pr-2 ">
                Top Equity mutual funds for long-term growth
              </p>
            </div>
          </div>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-10 pl-6 lg:px-4">
          <div class="col-span-3 lg:hidden sticky">
            <div class="flex justify-between items-center text-fontgrey border-b border-bgdarkgrey pb-3">
              <p>{filter == "basic" ? "Filters" : "Advanced Filters"}</p>
              <p class="text-fontclr bg-bggrey text-xs rounded-md px-3 py-2 ">
                Reset Filters{" "}
                <span class="bg-bgdarkgrey rounded-sm px-2">3</span>
              </p>
            </div>
            <div class="pt-4">
              <h3 class="font-semibold">
                {filter == "basic" ? "Scripbox Verdict" : "Risk Level"}
              </h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div>
                        <input
                          type="checkbox"
                          id="12"
                          onClick={() => {
                            filterclick.indexOf(" Recommended") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Recommended", "")
                                )
                              : setFilterclick(
                                  filterclick.concat(" Recommended")
                                );
                          }}
                        />
                        <label
                          for="12"
                          class={cx(
                            "font-thin ml-3 text-sm",
                            { "text-orange bg-bgorange": filter == "basic" },
                            { "text-fontgrey font-thin": filter != "basic" }
                          )}
                        >
                          {"Recommended"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        24
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <input
                          type="checkbox"
                          id="12"
                          onClick={() => {
                            filterclick.indexOf(" Low") !== -1
                              ? setFilterclick(filterclick.replace(" Low", ""))
                              : setFilterclick(filterclick.concat(" Low"));
                          }}
                        />
                        <label
                          for="12"
                          class={cx(
                            "font-thin ml-3 text-sm",
                            { "text-orange bg-bgorange": filter == "basic" },
                            { "text-fontgrey font-thin": filter != "basic" }
                          )}
                        >
                          {"Low"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div
                        onClick={() => {
                          filterclick.indexOf(" Top Ranked") !== -1
                            ? setFilterclick(
                                filterclick.replace(" Top Ranked", "")
                              )
                            : setFilterclick(filterclick.concat(" Top Ranked"));
                        }}
                      >
                        <input type="checkbox" id="13" />
                        <label
                          for="13"
                          class={cx(
                            "ml-3 font-thin text-sm",
                            { "text-green bg-bggreen": filter == "basic" },
                            { "text-fontgrey font-thin": filter != "basic" }
                          )}
                        >
                          {"Top Ranked"}
                        </label>
                      </div>
                      <span
                        class={cx(" bg-bggrey px-2 rounded-sm text-xs ", {
                          hidden: filter != "basic"
                        })}
                      >
                        24
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          filterclick.indexOf(" Medium") !== -1
                            ? setFilterclick(filterclick.replace(" Medium", ""))
                            : setFilterclick(filterclick.concat(" Medium"));
                        }}
                      >
                        <input type="checkbox" id="13" />
                        <label
                          for="13"
                          class={cx(
                            "ml-3 font-thin text-sm",
                            { "text-green bg-bggreen": filter == "basic" },
                            { "text-fontgrey font-thin": filter != "basic" }
                          )}
                        >
                          {"Medium"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div
                        onClick={() => {
                          filterclick.indexOf(" Not Recommended") !== -1
                            ? setFilterclick(
                                filterclick.replace(" Not Recommended", "")
                              )
                            : setFilterclick(
                                filterclick.concat(" Not Recommended")
                              );
                        }}
                      >
                        <input type="checkbox" id="14" />
                        <label
                          for="14"
                          class={cx(
                            "font-thin ml-3 text-sm",
                            { "text-red bg-bgred": filter == "basic" },
                            { "text-fontgrey font-thin": filter != "basic" }
                          )}
                        >
                          {"Not Recommended"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        24
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          filterclick.indexOf(" High") !== -1
                            ? setFilterclick(filterclick.replace(" High", ""))
                            : setFilterclick(filterclick.concat(" High"));
                        }}
                      >
                        <input type="checkbox" id="14" />
                        <label
                          for="14"
                          class={cx(
                            "font-thin ml-3 text-sm",
                            { "text-red bg-bgred": filter == "basic" },
                            { "text-fontgrey font-thin": filter != "basic" }
                          )}
                        >
                          {"High"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
              </ul>
              <h3 class="pt-2 font-semibold">
                {filter == "basic" ? "Fund Category" : "Fund Option"}
              </h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div>
                        <input
                          type="checkbox"
                          id="15"
                          onClick={() => {
                            filterclick.indexOf(" Equity") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Equity", "")
                                )
                              : setFilterclick(filterclick.concat(" Equity"));
                          }}
                        />
                        <label for="15" class=" ml-3 text-sm">
                          {"Equity"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <input
                          type="checkbox"
                          id="15"
                          onClick={() => {
                            filterclick.indexOf(" Divided Payout") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Divided Payout", "")
                                )
                              : setFilterclick(
                                  filterclick.concat(" Divided Payout")
                                );
                          }}
                        />
                        <label for="15" class=" ml-3 text-sm">
                          {"Divided Payout"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div>
                        <input
                          type="checkbox"
                          id="16"
                          onClick={() => {
                            filterclick.indexOf(" Debt") !== -1
                              ? setFilterclick(filterclick.replace(" Debt", ""))
                              : setFilterclick(filterclick.concat(" Debt"));
                          }}
                        />
                        <label for="16" class="ml-3 text-sm">
                          {"Debt"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <input
                          type="checkbox"
                          id="16"
                          onClick={() => {
                            filterclick.indexOf(" Divided Reinvestment") !== -1
                              ? setFilterclick(
                                  filterclick.replace(
                                    " Divided Reinvestment",
                                    ""
                                  )
                                )
                              : setFilterclick(
                                  filterclick.concat(" Divided Reinvestment")
                                );
                          }}
                        />
                        <label for="16" class="ml-3 text-sm">
                          {"Divided Reinvestment"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div>
                        <input
                          type="checkbox"
                          id="17"
                          onClick={() => {
                            filterclick.indexOf(" Hybrid") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Hybrid", "")
                                )
                              : setFilterclick(filterclick.concat(" Hybrid"));
                          }}
                        />
                        <label for="17" class=" ml-3 text-sm">
                          {"Hybrid"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <>
                      <div>
                        <input
                          type="checkbox"
                          id="17"
                          onClick={() => {
                            filterclick.indexOf(" Reinvestment") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Reinvestment", "")
                                )
                              : setFilterclick(
                                  filterclick.concat(" Reinvestment")
                                );
                          }}
                        />
                        <label for="17" class=" ml-3 text-sm">
                          {"Reinvestment"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li
                  class={cx(
                    "flex justify-between hover:bg-hoverbg  items-center pb-2 font-thin text-fontgrey",
                    { hidden: filter != "basic" }
                  )}
                >
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div>
                        <input
                          type="checkbox"
                          id="22"
                          onClick={() => {
                            filterclick.indexOf(" Others") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Others", "")
                                )
                              : setFilterclick(filterclick.concat(" Others"));
                          }}
                        />
                        <label for="22" class=" ml-3 text-sm">
                          Others
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
              <div class="pt-4 border-b border-bgdarkgrey pb-4">
                <div
                  class={cx("flex justify-between pb-3", {
                    hidden: filter != "basic"
                  })}
                >
                  {" "}
                  <p class="font-semibold">Minimum Investment</p>
                  <span class="text-bgblue text-sm">₹{val}+</span>
                </div>

                <input
                  type="range"
                  min="200"
                  max="10000"
                  value={val}
                  class={cx(
                    "w-110 appearance-none bg-blue-500 h-3 rounded-full slider-thumb",
                    { hidden: filter != "basic" }
                  )}
                  id="myRange"
                  onChange={e => {
                    setval(e.target.value);
                    console.log(e);
                  }}
                ></input>
                <h3
                  class={cx("pt-2 font-semibold", {
                    hidden: filter == "basic"
                  })}
                >
                  {"Sub Category"}
                </h3>
                <ul
                  class={cx("pt-2 pb-2 border-b border-bgdarkgrey", {
                    hidden: filter == "basic"
                  })}
                >
                  <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                    {filter != "basic" ? (
                      <>
                        {" "}
                        <div>
                          <input
                            type="checkbox"
                            id="3"
                            onClick={() => {
                              filterclick.indexOf(" Divided Payout") !== -1
                                ? setFilterclick(
                                    filterclick.replace(" Divided Payout", "")
                                  )
                                : setFilterclick(
                                    filterclick.concat(" Divided Payout")
                                  );
                            }}
                          />
                          <label for="3" class=" ml-3 text-sm">
                            {"Divided Payout"}
                          </label>
                        </div>
                        <span
                          class={cx(
                            "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                            { hidden: filter != "basic" }
                          )}
                        >
                          12
                        </span>
                      </>
                    ) : (
                      <> </>
                    )}
                  </li>
                  <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                    <div>
                      <input
                        type="checkbox"
                        id="4"
                        onClick={() => {
                          if (filter != "basic") {
                            filterclick.indexOf(" Large Cap") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Large Cap", "")
                                )
                              : setFilterclick(
                                  filterclick.concat(" Large Cap")
                                );
                          } else setFilterclick("");
                        }}
                      />
                      <label for="4" class="ml-3 text-sm">
                        {"Large Cap"}
                      </label>
                    </div>
                    <span
                      class={cx(
                        "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                        { hidden: filter != "basic" }
                      )}
                    >
                      12
                    </span>
                  </li>
                  <li
                    class={cx(
                      "flex justify-between items-center pb-2 font-thin text-fontgrey",
                      { hidden: filter == "basic" }
                    )}
                  >
                    <div>
                      <input
                        type="checkbox"
                        id="5"
                        onClick={() => {
                          if (filter != "basic") {
                            filterclick.indexOf(" Mid Cap") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Mid Cap", "")
                                )
                              : setFilterclick(filterclick.concat(" Mid Cap"));
                          } else setFilterclick("");
                        }}
                      />
                      <label for="5" class=" ml-3 text-sm">
                        {"Mid Cap"}
                      </label>
                    </div>
                    <span
                      class={cx(
                        "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                        { hidden: filter != "basic" }
                      )}
                    >
                      12
                    </span>
                  </li>
                  <li
                    class={cx(
                      "flex justify-between items-center pb-2 font-thin text-fontgrey",
                      { hidden: filter == "basic" }
                    )}
                  >
                    <div>
                      <input
                        type="checkbox"
                        id="6"
                        onClick={() => {
                          if (filter != "basic") {
                            filterclick.indexOf(" Small Cap") !== -1
                              ? setFilterclick(
                                  filterclick.replace(" Small Cap", "")
                                )
                              : setFilterclick(
                                  filterclick.concat(" Small Cap")
                                );
                          } else setFilterclick("");
                        }}
                      />
                      <label for="6" class=" ml-3 text-sm">
                        Small Cap
                      </label>
                    </div>
                    <span
                      class={cx(
                        "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                        { hidden: filter != "basic" }
                      )}
                    >
                      12
                    </span>
                  </li>
                  <li
                    class={cx(
                      "flex justify-between items-center pb-2 font-thin text-fontgrey",
                      { hidden: filter == "basic" }
                    )}
                  >
                    <div>
                      <input
                        type="checkbox"
                        id="7"
                        onClick={() => {
                          if (filter != "basic") {
                            filterclick.indexOf(" Sectoral / Thematic") !== -1
                              ? setFilterclick(
                                  filterclick.replace(
                                    " Sectoral / Thematic",
                                    ""
                                  )
                                )
                              : setFilterclick(
                                  filterclick.concat(" Sectoral / Thematic")
                                );
                          } else setFilterclick("");
                        }}
                      />
                      <label for="7" class=" ml-3 text-sm">
                        Sectoral / Thematic
                      </label>
                    </div>
                    <span
                      class={cx(
                        "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                        { hidden: filter != "basic" }
                      )}
                    >
                      12
                    </span>
                  </li>
                </ul>
              </div>
              <h3 class="pt-2 font-semibold">
                {filter == "basic" ? "Fund House" : "Fund Size"}
              </h3>
              <ul class="pt-2 pb-2 border-b border-bgdarkgrey">
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div
                        onClick={() => {
                          filterclick.indexOf(" Aditya Birla Mutual Fund") !==
                          -1
                            ? setFilterclick(
                                filterclick.replace(
                                  " Aditya Birla Mutual Fund",
                                  ""
                                )
                              )
                            : setFilterclick(
                                filterclick.concat(" Aditya Birla Mutual Fund")
                              );
                        }}
                      >
                        <input type="checkbox" id="8" />
                        <label for="8" class=" ml-3 text-sm">
                          {" "}
                          Aditya Birla Mutual Fund
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          filterclick.indexOf(" Below 500 Crores") !== -1
                            ? setFilterclick(
                                filterclick.replace(" Below 500 Crores", "")
                              )
                            : setFilterclick(
                                filterclick.concat(" Below 500 Crores")
                              );
                        }}
                      >
                        <input type="checkbox" id="8" />
                        <label for="8" class=" ml-3 text-sm">
                          Below 500 Crores
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div
                        onClick={() => {
                          filterclick.indexOf(" HDFC Mutual Fund") !== -1
                            ? setFilterclick(
                                filterclick.replace(" HDFC Mutual Fund", "")
                              )
                            : setFilterclick(
                                filterclick.concat(" HDFC Mutual Fund")
                              );
                        }}
                      >
                        <input type="checkbox" id="9" />
                        <label for="9" class="ml-3 text-sm">
                          {"HDFC Mutual Fund"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          filterclick.indexOf("500 - 1000 Crores") !== -1
                            ? setFilterclick(
                                filterclick.replace("500 - 1000 Crores", "")
                              )
                            : setFilterclick(
                                filterclick.concat(" 500 - 1000 Crores")
                              );
                        }}
                      >
                        <input type="checkbox" id="9" />
                        <label for="9" class="ml-3 text-sm">
                          {"500 - 1000 Crores"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li class="hover:bg-hoverbg flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div
                        onClick={() => {
                          filterclick == " Reliance Mutual Fund"
                            ? setFilterclick("")
                            : setFilterclick(
                                filterclick.concat(" Reliance Mutual Fund")
                              );
                        }}
                      >
                        <input type="checkbox" id="10" />
                        <label for="10" class=" ml-3 text-sm">
                          {"Reliance Mutual Fund"}
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          filterclick == " Above 1000 Crores"
                            ? setFilterclick("")
                            : setFilterclick(
                                filterclick.concat(" Above 1000 Crores")
                              );
                        }}
                      >
                        <input type="checkbox" id="10" />
                        <label for="10" class=" ml-3 text-sm">
                          {"Above 1000 Crores"}
                        </label>
                      </div>
                    </>
                  )}
                </li>
                <li
                  class={cx(
                    "flex justify-between hover:bg-hoverbg  items-center pb-2 font-thin text-fontgrey",
                    { hidden: filter != "basic" }
                  )}
                >
                  {filter == "basic" ? (
                    <>
                      {" "}
                      <div
                        onClick={() => {
                          filterclick.indexOf(" Tata Mutual Fund") !== -1
                            ? setFilterclick(
                                filterclick.replace(" Tata Mutual Fund", "")
                              )
                            : setFilterclick(
                                filterclick.concat(" Tata Mutual Fund")
                              );
                        }}
                      >
                        <input type="checkbox" id="11" />
                        <label for="11" class=" ml-3 text-sm">
                          Tata Mutual Fund
                        </label>
                      </div>
                      <span
                        class={cx(
                          "text-fontclr bg-bggrey px-2 rounded-sm text-xs ",
                          { hidden: filter != "basic" }
                        )}
                      >
                        12
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </li>
                <li class="flex justify-between items-center pb-2 font-thin text-fontgrey">
                  {filter == "basic" ? (
                    <p class="ml-6 text-sm text-bgblue pt-1">
                      See 44 other fund houses
                    </p>
                  ) : (
                    <input
                      class="h-8 rounded-md shadow-sm p-1 mr-3 mt-3 border-t-1 border-bgdarkgrey"
                      placeholder="search"
                      onChange={() => {
                        console.log(e.target.value);
                        setFilterclick(e.target.value);
                      }}
                    ></input>
                  )}
                </li>
              </ul>
              <a
                onClick={() => {
                  filter == "basic"
                    ? setFilter("advanced")
                    : setFilter("basic");
                }}
                class="text-sm text-bgblue pt-3 pb-4 flex items-center cursor-pointer"
              >
                {filter == "basic" ? (
                  <svg
                    class="w-6 h-4"
                    width="13"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1a1 1 0 011-1h11a1 1 0 110 2H1a1 1 0 01-1-1zm1 4a1 1 0 011-1h9a1 1 0 110 2H2a1 1 0 01-1-1zm3 3a1 1 0 100 2h5a1 1 0 100-2H4z"
                      fill="#1971E4"
                    />
                  </svg>
                ) : (
                  <svg
                    class="mr-2 h-4 w-4"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.765 13.366a.8.8 0 01-1.131 0l-4.8-4.8a.8.8 0 010-1.132l4.8-4.8a.8.8 0 011.131 1.132L4.331 7.2h9.268a.8.8 0 110 1.6H4.331l3.434 3.434a.8.8 0 010 1.132z"
                      fill="#1971E4"
                    />
                  </svg>
                )}

                {filter == "basic"
                  ? "Show advanced filters"
                  : "Back to basic filters"}
              </a>
            </div>
          </div>
          <div class="col-span-7 pl-6 lg:pl-0 lg:col-span-10 mb-12 ">
            <div class="flex justify-between items-center text-fontgrey lg:overflow-x-scroll lg:space-x-3">
              <p class="lg:hidden">Showing 20 of 126 funds</p>{" "}
              <div class="flex items-center">
                <p class="text-fontgrey text-xs pr-4 lg:hidden">Sort by </p>

                <select class="bg-white py-2 px-4 shadow-sm rounded-md lg:flex-shrink-0 ">
                  <option value="audi" selected>
                    Recommended{" "}
                  </option>
                  <option value="volvo">Track Record</option>
                  <option value="saab">Relative Size</option>
                  <option value="vw">Category View</option>
                  <option value="vw">Consistency</option>
                </select>
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
              <div class=" lg:space-x-1 lg:flex hidden px-2  lg:my-2 py-2 lg:flex-shrink-0 items-center shadow-sm bg-white rounded-md">
                <p class="text-sm">Tata Mutual Fund</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 12"
                  id="close-icon-gray"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
                    fill="#737373"
                  ></path>
                </svg>{" "}
              </div>
            </div>
            <div class="bg-white shadow-md rounded-md px-3 py-3 mt-4 mb-6">
              {data && data.results ? (
                data.results.map(item => {
                  return (
                    <div class="px-2  hover:text-bgblue flex items-center justify-between hover:shadow-md rounded-md py-4 cursor-pointer border-b border-bgdarkgrey">
                      <div class="flex items-center">
                        <div class="h-12 w-1 bg-orange rounded-md mr-3"></div>
                        <img class="h-8 w-8" src={item._source.amc_logo_url} />
                        <div class="pl-4 ">
                          <p class="pb-2 ">{item._source.amc_name}</p>
                          <div class="flex space-x-4">
                            <span class="text-fontgrey text-sm font-thin">
                              Large Cap
                            </span>{" "}
                            <p class="bg-bgorange text-orange text-sm ">
                              Recommended
                            </p>{" "}
                            <p class="bg-bggreen text-sm text-green lg:hidden">
                              Top Ranked
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="flex lg:hidden items-center space-x-4 ">
                          <span class="pr-2 text-black lg:hidden">
                            {item._source.first_investment_amount} Cr
                          </span>
                          <svg
                            class="sparkline-growth"
                            width="64"
                            height="13"
                            stroke-width="2"
                            stroke="blue"
                            fill="rgba(0, 0, 255, .2)"
                          >
                            <path
                              class="sparkline--fill"
                              d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                              stroke="none"
                            ></path>
                            <path
                              class="sparkline--line"
                              d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                              fill="none"
                            ></path>
                            <line
                              class="sparkline--cursor"
                              x1="-1000"
                              x2="-1000"
                              y1="0"
                              y2="13"
                              stroke-width="2"
                            ></line>
                            <circle
                              class="sparkline--spot"
                              cx="-1000"
                              cy="4.55"
                              r="2"
                            ></circle>
                            <rect
                              width="64"
                              height="13"
                              class="sparkline--interaction-layer"
                            ></rect>
                          </svg>
                        </div>
                        <div class="lg:hidden flex space-x-5 pt-1">
                          <span class="text-fontgrey font-thin text-sm">
                            Fund Size
                          </span>
                          <span class="text-fontgrey text-sm">5Y returns</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
            <div class="flex mb-4 justify-between items-center">
              <button
                class="px-3 py-2 bg-white shadow-md rounded-md text-fontgrey text-sm hover:bg-hoverbg"
                onClick={() => {
                  startValue > 0
                    ? setStartValue(startValue - 20)
                    : setStartValue(0);
                  activePage != 1
                    ? setActivePage(activePage - 1)
                    : setActivePage(1);
                }}
              >
                Previous
              </button>
              <Pagination
                innerClass={
                  "flex items-center justify-between bg-white shadow-md rounded-md"
                }
                activeClass={"bg-bgblue text-white"}
                itemClass={"px-4 py-2 text-sm border-l border-bgdarkgrey"}
                activePage={activePage}
                itemClassFirst="border-none"
                itemClassPrev="hidden"
                itemClassNext="hidden"
                itemsCountPerPage={20}
                totalItemsCount={605}
                pageRangeDisplayed={5}
                onChange={e => {
                  setActivePage(e);
                  console.log(e * 20, "e");
                  setStartValue(e * 20 + 1);
                }}
              />
              <button
                class="px-3 py-2 bg-white shadow-md rounded-md text-fontgrey text-sm hover:bg-hoverbg"
                onClick={() => {
                  startValue < 600
                    ? setStartValue(startValue + 20)
                    : setStartValue(600);

                  activePage != 31
                    ? setActivePage(activePage + 1)
                    : setActivePage(31);
                }}
              >
                Next
              </button>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="bg-lightblue pb-20 sm:pb-4 lg:pb-5">
        <div class="max-w-6xl mx-auto lg:pr-2 pt-20 lg:pt-10 flex pl-2 justify-between items-start content-start flex-wrap  lg:max-w-2xl">
          <div class="lg:order-2">
            <div class="lg:hidden">
              <span class="text-sm text-fontgrey font-normal">
                How does Scripbox rate funds?
              </span>
              <h1 class="text-3xl font-bold max-w-sm leading-8 pt-2 pb-3 ">
                Proprietary 4-step system to rate mutual funds
              </h1>
              <p class="max-w-xs text-fontgrey text-md font-thin pb-4">
                We use a proprietary system to rate mutual funds and based on
                that make a recommendation or top ranking
              </p>
            </div>
            <div class="bg-white pl-4 py-3 rounded-md mb-4 lg:mt-8 lg:pb-8">
              <h4 class="pb-2">Recommended</h4>
              <p class="text-fontgrey text-sm max-w-xs font-thin lg:max-w-2xl ">
                Scripbox algorithm recommends 2-4 funds for investment for an
                investment asset class such as large cap, diversified, liquid
                etc. When you invest for an objective, the algorithm suggests
                the appropriate asset class and funds.
              </p>
            </div>
            <div>
              <p class="border-b border-bgdarkgrey pl-1 pb-3 text-md">
                Top Ranked
              </p>
            </div>
            <div>
              <p class="pl-1 pb-3 text-md pt-2">Not Recommended</p>
            </div>
          </div>
          <div class="lg:order-1">
            <div class="hidden lg:block ">
              <p class="text-sm text-fontgrey font-normal sm:text-center">
                How does Scripbox rate funds?
              </p>
              <h1 class="text-3xl font-bold  sm:pt-1 leading-8 pt-2 pb-3 sm:text-2xl sm:max-w-xs sm:text-center sm:mx-auto">
                Proprietary 4-step system to rate mutual funds
              </h1>
              <p class=" text-fontgrey text-md font-thin pb-4 sm:text-center">
                We use a proprietary system to rate mutual funds and based on
                that make a recommendation or top ranking
              </p>
            </div>
            <div class="hidden lg:block bg-bgblue1 text-center mt-8 mb-6 px-1 py-3 w-56 mx-auto rounded-md text-sm text-fontgrey">
              <a
                onClick={() => {
                  setToggle("Equity");
                }}
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Equity"
                  },
                  "cursor-pointer"
                )}
              >
                Equity Funds{" "}
              </a>
              <a
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Debt"
                  },
                  "cursor-pointer"
                )}
                onClick={() => {
                  setToggle("Debt");
                }}
              >
                Debt Funds
              </a>
            </div>
            <div class="max-w-xl flex lg:mx-auto ">
              <div class="shadow-lg bg-white rounded-l-md ">
                <div class="pt-4  pb-5  pl-4 lg:pr-8 md:pr-0 sm:pr-4">
                  <svg
                    class="w-8 h-8 sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 31"
                    id="calender-event-icon"
                  >
                    <path
                      d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z"
                      fill="#E6E6E6"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z"
                      fill="#fff"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M11 21l3 3 7-7"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M31 12H1"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M8 1v3M24 1v3"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <h4 class="font-semibold pt-3 pb-2">Track Record</h4>
                  <p class="max-w-xs text-md text-textgrey pr-4 lg:text-sm">
                    We look at consistent and long historical performance for
                    our analysis
                  </p>
                </div>
                <div class="pt-4 pl-3 pb-5 lg:pr-0 border-t border-bggrey">
                  {toggle == "Equity" ? (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="three-dimensional-world"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15H1zm30 0H1c0 2.761 6.716 5 15 5 8.284 0 15-2.239 15-5z"
                        fill="#E6E6E6"
                      ></path>
                      <path
                        d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15zM13 11.107c-.86.06-1.7.139-2.5.245M19 11.107c.86.06 1.7.139 2.5.245"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M27.194 12.68C29.554 13.563 31 14.724 31 16c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5 0-1.276 1.446-2.437 3.806-3.32"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="impact-of-interestrates"
                    >
                      <path
                        d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15z"
                        fill="#E6E6E6"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M11.179 13.857a2.678 2.678 0 100-5.357 2.678 2.678 0 000 5.357zM20.821 23.5a2.679 2.679 0 100-5.357 2.679 2.679 0 000 5.357z"
                        fill="#fff"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M9.572 22.429L23.5 8.5"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M18.143 8.5H23.5v5.357"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  )}
                  <h4 class="font-semibold pt-3 pb-2">
                    {toggle == "Equity"
                      ? "Sub-asset Class View"
                      : "Impact of Interest Rates"}
                  </h4>
                  <p class="max-w-xs text-md text-textgrey pr-1 lg:text-sm md:pr-0">
                    {toggle == "Equity"
                      ? "We check if the sub-category of the fund is recommended by us"
                      : "We check the relative interest rate risk of the sub-category of the fund. Lower the better"}
                  </p>
                </div>
              </div>

              <div class=" bg-white shadow-lg rounded-r-md">
                <div class="pt-4 pl-4 pb-5">
                  <svg
                    class="w-8 h-8 sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    id="safe-1"
                  >
                    <g
                      clip-path="url(#fbclip0)"
                      stroke="#181818"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    >
                      <path
                        d="M26 1H6a5 5 0 00-5 5v20a5 5 0 005 5h20a5 5 0 005-5V6a5 5 0 00-5-5z"
                        fill="#E6E6E6"
                        stroke-linecap="square"
                      ></path>
                      <path d="M23 16h8M1 16h8" stroke-linecap="round"></path>
                      <path
                        d="M16 23a7 7 0 100-14 7 7 0 000 14z"
                        fill="#fff"
                        stroke-linecap="square"
                      ></path>
                      <path d="M17 15l3-3" stroke-linecap="round"></path>
                    </g>
                  </svg>
                  <h4 class="font-semibold pt-3 pb-2">
                    {toggle == "Equity" ? "Fund Size" : "Relative Size"}
                  </h4>
                  <p class="max-w-xs text-md text-textgrey pr-1 lg:text-sm">
                    We look at the size of the fund with respect to other funds
                    in the category. Larger funds are preferred
                  </p>
                </div>

                <div class=" pl-4 pt-4 border-t border-bggrey ">
                  {toggle == "Equity" ? (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="speedometer-2"
                    >
                      <path
                        d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
                        fill="#E6E6E6"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                      <path
                        d="M20 6.6c-1.2-.5-2.6-.8-4-.8-3.788 0-7.118 2.105-8.877 5.2M19 13l4-4.5"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M16 20a4 4 0 110-8 4 4 0 010 8z"
                        fill="#fff"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      class="w-8 h-8 sm:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      id="speedometer-1"
                    >
                      <g clip-path="url(#fyclip0)">
                        <path
                          d="M23.586 18.731V31l-7.241-3.103L9.104 31V18.731"
                          fill="#E6E6E6"
                        ></path>
                        <path
                          d="M23.586 18.731V31l-7.241-3.103L9.104 31V18.731"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.134 3.091a4.407 4.407 0 002.508-1.039 4.407 4.407 0 015.716 0 4.408 4.408 0 002.508 1.04 4.408 4.408 0 014.043 4.042 4.401 4.401 0 001.039 2.508 4.407 4.407 0 010 5.716 4.407 4.407 0 00-1.04 2.508 4.408 4.408 0 01-4.042 4.043 4.407 4.407 0 00-2.508 1.039 4.407 4.407 0 01-5.716 0 4.407 4.407 0 00-2.508-1.04 4.408 4.408 0 01-4.043-4.042 4.408 4.408 0 00-1.039-2.508 4.407 4.407 0 010-5.716 4.407 4.407 0 001.04-2.508 4.407 4.407 0 014.042-4.043z"
                          fill="#E6E6E6"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        ></path>
                        <circle
                          cx="16.5"
                          cy="12.5"
                          r="6.5"
                          fill="#fff"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="square"
                        ></circle>
                        <path
                          d="M14 12l2.5 2.5 5-5.5"
                          stroke="#181818"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  )}
                  <h4 class="font-semibold pt-3 pb-2">
                    {toggle == "Equity"
                      ? "Fund Performance"
                      : "Credit Attractiveness"}
                  </h4>
                  <p class="max-w-xs text-md text-textgrey pb-2 lg:text-sm ">
                    {toggle == "Equity"
                      ? "Consistency of performance over various tenures is analysed for a relative performance stack"
                      : "We check the relative interest rate risk of the sub-category of the fund. Lower the better"}
                  </p>
                </div>
              </div>
            </div>
            <div class=" lg:hidden bg-bgblue1 text-center mt-8  px-1 py-3 w-56 mx-auto rounded-md text-sm text-fontgrey">
              <a
                onClick={() => {
                  setToggle("Equity");
                }}
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Equity"
                  },
                  "cursor-pointer"
                )}
              >
                Equity Funds{" "}
              </a>
              <a
                className={cx(
                  {
                    "bg-white px-3 py-2 rounded-md mr-1": toggle == "Debt"
                  },
                  "cursor-pointer"
                )}
                onClick={() => {
                  setToggle("Debt");
                }}
              >
                Debt Funds
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gray pb-20 sm:pb-4">
        <div class="max-w-6xl mx-auto py-5 pt-16 lg:pl-2">
          <h2 class="text-3xl font-semibold text-center sm:text-xl">
            How to invest in best mutual funds with Scripbox
          </h2>
          <p class="text-md max-w-md mx-auto font-thin text-center text-textgrey pt-2">
            Investing through Scripbox is made easy and paperless. All you need
            to do is follow the below steps and start investing.
          </p>
          <div class="flex pt-8 space-x-6 lg:pb-4 lg:overflow-x-scroll">
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bgyellow2  rounded-t-md">
                <svg
                  class="w-48 h-32 mx-auto "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 187 40"
                  id="group-card-images"
                >
                  <path
                    clip-rule="evenodd"
                    d="M1.944 37c-.535 0-1.02-.22-1.372-.572A1.937 1.937 0 010 35.056V3.077l2.643 1.321L5.44 3l2.798 1.398L11.035 3l2.797 1.398L16.63 3l2.798 1.398L22.224 3l2.797 1.398 2.642-1.32-.07 32.22c-.097.12-.27.212-.525.316-.718.294-1.927.541-3.941.753-3.761.396-10.194.633-21.183.633z"
                    fill="#fff"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M31.29 30H3.907v4.54c0 1.406-.58 2.453-2.059 2.453h28.043c.77 0 1.399-.63 1.399-1.399z"
                    fill="#8dbfff"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M9.133 22.873L20.52 11.368"
                    stroke="#5890da"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M15.781 20.703a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353zM13.926 10.106a1.677 1.677 0 100 3.353 1.677 1.677 0 000-3.353z"
                    stroke="#5890da"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M64.543 38c8.977 0 16.254-7.277 16.254-16.253 0-8.976-7.277-16.253-16.254-16.253S48.29 12.77 48.29 21.747C48.29 30.723 55.567 38 64.543 38z"
                    fill="#fbae1f"
                  ></path>
                  <g stroke-width="1.5" stroke-linecap="round">
                    <path
                      d="M75.479 3.877h5.756M78.357 1v5.756M83.239 11.428h3.239M84.858 9.808v3.24"
                      stroke="#fbae1f"
                    ></path>
                    <path
                      d="M67.007 31.128L59.76 22.59h1.526c3.16 0 5.72-1.664 5.72-4.225s-2.56-4.226-5.72-4.226h-1.526"
                      stroke="#fff"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M59.753 18.373h9.808M59.755 14.132h9.808"
                      stroke="#fff"
                    ></path>
                  </g>
                  <path
                    clip-rule="evenodd"
                    d="M117.149 1c-2.011 0-4.146.686-5.597 2.684-.901 1.241-1.543 3.059-1.884 5.471-1.614.559-2.663 1.562-3.19 2.966-.517 1.378-.565 2.874-.12 4.489-.819 1.36-1.274 2.54-1.396 3.53-.194 1.57.09 3.573.485 4.914.647 2.191 1.76 4.185 3.229 5.586 1.384 1.32 3.082 2.122 5.014 2.122h6.604c2.668 0 4.959-2.282 6.376-3.959 1.57-1.856 2.447-4.035 2.447-8.248 0-2.221-.749-3.953-2.214-5.213.347-3.53-.146-5.978-1.318-7.416-.908-1.114-1.873-1.858-2.881-2.26-.219-1.815-1.01-3.086-2.301-3.864-1.012-.61-2.012-.802-3.254-.802z"
                    fill="#ace0a2"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M116.963 38.045V17.477M103.478 38.192h26.981M120.294 18.95l-3.331 4.097M113.163 21.908l3.805 3.293v4.727l4.652-5.698"
                    stroke="#54894a"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M156.043 29.25a.275.275 0 00-.268.318l.963 5.617a.983.983 0 00.966.815h2.357a.98.98 0 00.968-.828l.883-5.608a.271.271 0 00-.077-.236.271.271 0 00-.193-.08zM171.613 29.25a.275.275 0 00-.268.318l.965 5.618a.98.98 0 00.966.814h2.251a.98.98 0 00.965-.813l.97-5.618a.275.275 0 00-.269-.319z"
                    fill="#ff9e9e"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M153.672 7.015l3.024.527a2.046 2.046 0 011.692 1.872l.051.728a21.537 21.537 0 018.181-1.48c8.597 0 15.569 4.2 15.569 11.987 0 7.788-6.97 11.976-15.569 11.976-7.527 0-13.808-3.116-15.253-9.198l-3.175-1.098a1.087 1.087 0 01-.733-1.029v-2.248a1.087 1.087 0 01.74-1.032l3.465-1.172a10.237 10.237 0 012.563-4.006 2.036 2.036 0 01-.912-1.253l-.812-3.322a1.017 1.017 0 01.246-.942 1.024 1.024 0 01.923-.31z"
                    fill="#ffbdbd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M156.261 17.81a1.197 1.197 0 100-2.395 1.197 1.197 0 000 2.395z"
                    fill="#c56565"
                  ></path>
                </svg>
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Choose Long Term Plan in the plans page
                </h4>
                <p class="max-w-xs text-textgrey text-sm">
                  The fund can be chosen once you select Long Term Plan
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bgblue3  rounded-t-md py-8">
                <svg
                  class="w-20 h-16 mx-auto "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 56 59"
                  id="create-account"
                >
                  <path
                    d="M38.401 0H4.037A4.03 4.03 0 000 4.023v50.954A4.03 4.03 0 004.038 59H38.4a4.03 4.03 0 004.038-4.023V4.023A4.03 4.03 0 0038.4 0z"
                    fill="#fff"
                  ></path>
                  <g filter="url(#bsa)">
                    <path
                      d="M36.96 54.86H5.479c-.738 0-1.338-.784-1.338-1.75V5.89c0-.966.6-1.75 1.338-1.75h31.483c.738 0 1.337.784 1.337 1.75v47.22c0 .966-.599 1.75-1.337 1.75z"
                      fill="#b3b3b3"
                    ></path>
                  </g>
                  <path
                    d="M18.632 34.158h23.807v9.315H21.632a3 3 0 01-3-3z"
                    fill="#444"
                    opacity=".5"
                  ></path>
                  <path
                    d="M52.404 10.756H16.452c-1.655 0-2.996 1.208-2.996 2.7v21.602c0 1.492 1.34 2.7 2.996 2.7h35.952c1.655 0 2.996-1.208 2.996-2.7V13.456c0-1.492-1.341-2.7-2.996-2.7z"
                    fill="#ecc94b"
                  ></path>
                  <path
                    d="M18.632 17.892l1.552 1.775 3.623-4.14M18.632 30.313l1.552 1.775 3.623-4.14"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></path>
                  <g fill="#fff">
                    <rect
                      height="2.07"
                      rx="1.035"
                      width="21.737"
                      x="27.947"
                      y="17.597"
                    ></rect>
                    <rect
                      height="2.07"
                      rx="1.035"
                      width="21.737"
                      x="27.947"
                      y="30.018"
                    ></rect>
                  </g>
                </svg>
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Create an account
                </h4>
                <p class="max-w-xs text-textgrey text-sm">
                  Create an account with Scripbox through a paperless process,
                  to invest in this fund
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bggreen2  rounded-t-md py-8">
                <svg
                  class="w-16 h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 56 57"
                  id="invest"
                >
                  <path
                    d="M37.321 35.628a1.198 1.198 0 00-1.038-.497l-25.438 1.212a1.211 1.211 0 00-1.154 1.21c0 10.687 8.695 19.382 19.382 19.382.505 0 .957-.314 1.135-.786l7.268-19.382c.143-.382.084-.81-.155-1.139z"
                    fill="#f2c8ab"
                  ></path>
                  <g fill="#f2c7aa">
                    <path d="M8.48 12.113V7.268a3.634 3.634 0 117.268 0v4.845M18.171 12.114V6.057a3.634 3.634 0 017.268 0v6.057M37.553 12.114V6.057a3.634 3.634 0 117.268 0v6.057M27.861 12.114v-8.48a3.634 3.634 0 017.269 0v8.48"></path>
                  </g>
                  <path
                    d="M54.512 41.496h-53.3A1.211 1.211 0 010 40.285V11.21C0 10.542.542 10 1.211 10h53.301c.669 0 1.211.542 1.211 1.211v29.074c0 .668-.542 1.21-1.211 1.21z"
                    fill="#0ecf72"
                  ></path>
                  <path
                    d="M44.821 13.325H10.903a7.268 7.268 0 01-7.268 7.269v9.69a7.268 7.268 0 017.268 7.269H44.82a7.268 7.268 0 017.269-7.268v-9.691a7.268 7.268 0 01-7.269-7.269z"
                    fill="#a4f2ac"
                  ></path>
                  <path
                    d="M27.862 31.496a6.057 6.057 0 100-12.114 6.057 6.057 0 000 12.114z"
                    fill="#0ecf72"
                  ></path>
                  <path
                    d="M36.764 29.013v7.328c-3.834 0-8.7 2.126-11.265 5.159h10l10.18-.313c.225-1.179.354-2.391.354-3.634V20.668c-5.423-.664-9.269 3.115-9.269 8.345z"
                    fill="#000"
                    opacity=".2"
                  ></path>
                  <path
                    d="M48.455 20.668c-5.423-.664-7.268 3.115-7.268 8.345l-.384 8.944c-6.662 0-12.942 3.835-12.942 11.71V55.7c0 .667.53 1.233 1.196 1.234 10.694.008 19.398-8.69 19.398-19.383z"
                    fill="#f3cbaf"
                  ></path>
                </svg>{" "}
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Invest online & transfer
                </h4>
                <p class="max-w-xs text-textgrey text-sm pr-3">
                  Invest via netbanking, UPI or through an SIP (eNACH mandate).{" "}
                </p>
              </div>
            </div>
            <div class="max-w-xs rounded-md shadow-lg lg:flex-shrink-0 bg-white">
              <div class="bg-bgviolet rounded-t-md py-8">
                <svg
                  class="w-16 h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 60 45"
                  id="track"
                >
                  <rect fill="#78b5f2" height="45" rx="5" width="60"></rect>
                  <path
                    d="M1.607 24.012h3.75l3.585 4.79 5.522-12.195 5.893 13.928 5.893-11.06 4.821 4.537 7.5-5.798 7.871 5.798 5.77-4.537 4.573-2.868h1.608"
                    opacity=".2"
                    stroke="#0a5ac2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="3"
                  ></path>
                  <path
                    d="M1.071 21.87h4.286l3.585 4.79 5.522-12.196 5.893 13.929 5.893-11.061 4.821 4.538 7.5-5.798 7.87 5.798 5.77-4.538 4.574-2.868h2.143"
                    stroke="#fff"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M42.857 18.214c0-1.994-1.369-3.655-3.214-4.134V0H37.5v14.08c-1.845.479-3.214 2.14-3.214 4.134 0 1.995 1.369 3.656 3.214 4.134V45h2.143V22.348c1.845-.478 3.214-2.14 3.214-4.134z"
                    fill="#f6e05e"
                  ></path>
                </svg>{" "}
              </div>
              <div class="bg-white px-3 py-3 rounded-b-md">
                <h4 class="font-semibold leading-5 pb-2 text-md ">
                  Track your investments
                </h4>
                <p class="max-w-xs text-textgrey text-sm pr-3">
                  Track, invest more and withdraw your investments through the
                  Scripbox dashboard{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl mx-auto pt-20 px-3 sm:pt-12">
          <h3 class="text-3xl font-semibold text-center sm:text-2xl">
            What are Best Equity Mutual Funds?
          </h3>
          <div class="flex justify-between pt-12 lg:flex-wrap sm:pt-5">
            <div>
              <h4 class="font-semibold text-xl pb-3">
                Why invest in mutual funds?
              </h4>
              <p class="text-textgrey max-w-lg lg:max-w-4xl">
                Invest in the best mutual funds to invest recommended by
                Scripbox that are scientifically and algorithmically selected
                that best suit your needs.
              </p>
              <p class="text-textgrey lg:max-w-4xl max-w-lg pt-2">
                Be it long-term, short-term, tax saving or your emergency needs.
                We have you covered. Let’s take a look at the top mutual funds
                to invest this year. You can invest in the mutual funds based on
                broad categories namely equity funds, debt funds, balanced fund,
                and liquid funds
              </p>
            </div>

            <iframe
              class="w-64 lg:h-64 rounded-md lg:mx-auto lg:pt-10"
              src="https://www.youtube.com/embed/G8_zxdLM1Ao"
            ></iframe>
          </div>
          <div class="py-16 ">
            <h4 class="font-semibold text-xl pb-4">Invest Now</h4>
            <div class="flex space-x-12 lg:flex-wrap lg:space-x-0">
              <div class="max-w-xs lg:max-w-4xl">
                <h4 class="font-semibold">Scientifically-chosen funds</h4>
                <p class="text-textgrey text-sm pt-2">
                  Scripbox algorithms help you choose the best mutual funds to
                  invest now in India from over 8,000 choices based on their
                  historical performance
                </p>
              </div>
              <div class="max-w-xs lg:max-w-4xl lg:pt-4">
                <h4 class="font-semibold">Start modest</h4>
                <p class="text-textgrey text-sm pt-2">
                  Start small, stay strong. The longer you stay invested with
                  us, the better your returns are. Why? Because it is the magic
                  of compounding
                </p>
              </div>
              <div class="max-w-xs lg:max-w-4xl lg:pt-4">
                <h4 class="font-semibold">One-click investment</h4>
                <p class="text-textgrey text-sm pt-2">
                  Choose between SIPs (Systematic Investment Plan) and OTIs
                  (one-time investments). Invest in top mutual funds to invest
                  in India with a single click.
                </p>
              </div>
              <div class="max-w-xs lg:max-w-4xl lg:pt-4">
                <h4 class="font-semibold">Track your investments</h4>
                <p class="text-textgrey text-sm pt-2">
                  We help you stay on track with your investments and also
                  inform you in case you need to change your selection.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-start lg:flex-wrap">
              <div class="">
                <h3 class="font-semibold text-xl">What are Mutual funds?</h3>
                <p class="pb-4  pt-2 text-textgrey font-normal text-sm">
                  An asset management company AMC or fund house pools
                  investments made by individual investors and institutional
                  investors. With this pool of investments, an AMC forms a
                  mutual fund.
                </p>
                <p class="pb-4  text-textgrey font-normal text-sm">
                  AMCs have fund managers who manage the fund investments amount
                  and invest in stocks, securities, and bonds, etc on the behalf
                  of investors.
                </p>
                <p class="text-textgrey font-normal text-sm">
                  Mutual fund investors are allocated units of the fund against
                  the quantum of investment. These units can be re-invested or
                  redeemed by investors on the maturity of the fund at the NAV.
                </p>
              </div>
              <div class="flex bg-lightblue rounded-md space-x-3 ml-8 max-w-lg pt-4 pb-8 pl-5 pr-10 items-start sm:mt-5 sm:max-w-2xl lg:ml-0 mt-8">
                <svg
                  class="w-16 h-8"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.365 0C6.49771 0 0.911133 5.60754 0.911133 12.5C0.911133 19.3925 6.49771 25 13.365 25C20.2323 25 25.8189 19.3925 25.8189 12.5C25.8189 5.60754 20.2323 0 13.365 0Z"
                    fill="#43A6DD"
                  ></path>
                  <path
                    d="M15.5305 17.3909H13.9061V11.4126C13.9061 11.1125 13.6639 10.8691 13.3646 10.8691H11.1987C10.8994 10.8691 10.6572 11.1125 10.6572 11.4126C10.6572 11.7128 10.8994 11.9561 11.1987 11.9561H12.8231V17.3909H11.1987C10.8994 17.3909 10.6572 17.6342 10.6572 17.9344C10.6572 18.2345 10.8994 18.4778 11.1987 18.4778H15.5305C15.8298 18.4778 16.072 18.2345 16.072 17.9344C16.072 17.6342 15.8298 17.3909 15.5305 17.3909Z"
                    fill="white"
                  ></path>
                  <path
                    d="M13.3652 9.23934C13.9633 9.23934 14.4481 8.7527 14.4481 8.15239C14.4481 7.55208 13.9633 7.06543 13.3652 7.06543C12.7671 7.06543 12.2822 7.55208 12.2822 8.15239C12.2822 8.7527 12.7671 9.23934 13.3652 9.23934Z"
                    fill="white"
                  ></path>
                </svg>
                <div>
                  <h3 class="pb-2">What is a mutual fund NAV?</h3>
                  <p class="text-textgrey font-normal text-sm">
                    Net asset value NAV is the market price of the fund. It is
                    important because it represents the worth of each share of
                    the fund. One can say just like shares have a share price,
                    mutual funds have a NAV to represent it’s worth.
                  </p>
                </div>
              </div>
            </div>
            <div class="h-6 w-20 bg-orange rounded-md mt-10 mb-6"></div>
            <div>
              <h3 class="text-xl font-semibold">
                How to Select the Top Performing Mutual Funds in India in 2020?
              </h3>
              <p class="max-w-2xl pt-2 text-blackdark font-thin">
                An investor would ultimately want a mutual fund that provides a
                higher return. The entire selection process can be guided by
                three attributes which are an investor’s life goals,
                understanding of investment risk and investment horizon
              </p>
            </div>
            <div class="flex pt-12 justify-between space-x-4 md:flex-wrap md:space-x-0">
              <div class="max-w-xl md:max-w-2xl ">
                <h3 class="font-semibold pb-3 text-lg">Investment Objective</h3>
                <p class="text-sm  font-thin text-textgrey pb-3">
                  An investor should first sort out his personal life goals and
                  corresponding to the life goals an investment plan must be
                  chosen. Each scheme is different from the other and serves a
                  different purpose.
                </p>
                <p class="text-sm  font-thin text-textgrey pb-3">
                  Hence to arrive at a meaningful decision the fund investments
                  objective must match an investor’s goals, investment plan and
                  risk appetite. A long term objective cannot be met with a
                  short term scheme.
                </p>
                <p class="text-sm  font-thin text-textgrey pb-3">
                  All the necessary details related to the scheme, its asset
                  allocation, objective, and strategy are available in the key
                  information document and scheme information document.
                </p>
              </div>
              <div class="max-w-xl pl-8 md:pl-0 md:max-w-2xl md:pt-4 ">
                <h3 class="font-semibold pb-3 text-lg">Fund History</h3>
                <p class="text-sm font-thin text-textgrey pb-3">
                  The fund history is the track record of the fund’s performance
                  in the past during the ups and downs of the market. This shows
                  the strength of the fund during tough times.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  A recently launched fund may or may not outperform the tough
                  times i.e. bear runs in the market since it does not have
                  dealt with such scenarios. On the other hand, a fund with a
                  good history of generating consistent returns shows the
                  accuracy of investment strategies.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  To shortlist, an investor must check the track for the same
                  period for which the investment horizon is decided. For
                  example, if an investor is willing to invest for say 5 years
                  he must check the track record of 5 years of the fund. Expense
                  Ratio
                </p>
              </div>
            </div>
            <div class="flex pt-12 justify-between space-x-4 md:flex-wrap md:space-x-0 md:pt-4">
              <div class="max-w-xl pr-6 lg:pr-0 md:max-w-2xl ">
                <h3 class="font-semibold pb-3 text-lg">Expense Ratio</h3>
                <p class="text-sm font-thin text-textgrey pb-3">
                  An annual fee is charged by the fund house manager for
                  managing an investor’s funds, this is called expense ratio and
                  expressed as a percentage. The final payoff to an investor
                  will be the returns generated minus the expense ratio. The net
                  amount is the final amount that an investor received.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  A higher expense ratio would result in lower returns for an
                  investor. Hence while considering a fund, an investor must
                  choose a fund with a lower expense ratio compared to peer
                  funds in the category
                </p>
              </div>
              <div class="max-w-xl md:max-w-2xl md:pt-4 ">
                <h3 class="font-semibold pb-3 text-lg">
                  Performance of fund manager
                </h3>
                <p class="text-sm font-thin text-textgrey pb-3">
                  The fund manager’s involvement is critical in the performance
                  of a fund. It is the fund manager’s responsibility to ensure
                  the show is going smoothly. It is important to know the track
                  record of the fund manager.
                </p>
                <p class="text-sm font-thin text-textgrey pb-3">
                  An investor must check the performance of the fund during the
                  market rally and slump. Better fund management is showcased
                  when a fund provides consistent returns and contains losses
                  during the bear runs of the market.
                </p>
              </div>
            </div>
            <div class="h-6 w-20 bg-orange rounded-md mt-10 mb-6"></div>
            <div class="flex items-center lg:flex-wrap mb-20">
              <div class="max-w-2xl pr-6 lg:pr-0 lg:max-w-6xl ">
                <h3 class="font-semibold pb-3 text-xl">
                  How to invest in Top Performing Mutual Fund?
                </h3>
                <p class="text-base font-thin text-textgrey pb-3">
                  An investor can invest a lump sum one time or through SIP
                  periodically. An investor can choose to invest lump sum one
                  time if he has considerable corpus to invest for a
                  longer-term. While SIP is a regular investment over a period
                  of time.
                </p>
                <p class="text-base font-thin text-textgrey pb-3">
                  An investor can choose to invest monthly, quarterly or
                  half-yearly. SIP mutual funds are recommended for the first
                  time mutual fund investors.
                </p>
                <p class="text-base font-thin text-textgrey pb-3">
                  Investing through Scripbox is made easy and{" "}
                  <span class="text-black font-semibold"> paperless</span>. All
                  you need to do is follow the 5 easy steps to start investing.
                </p>
              </div>
              <ul class="shadow-md rounded-md px-6 py-6 mx-auto lg:mt-6 ">
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    1
                  </span>
                  Sign in at scripbox.com
                </li>
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    2
                  </span>
                  Enter your personal details like dob, gender
                </li>
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    3
                  </span>
                  Complete your KYC
                </li>
                <li class="text-black font-semibold text-md pb-4">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    4
                  </span>
                  Add your bank details
                </li>
                <li class="text-black font-semibold text-md ">
                  <span class="bg-lightgreen px-2 py-1 mr-4 rounded-full">
                    5
                  </span>
                  Create a new plan and start investing
                </li>
              </ul>
            </div>
          </div>
          <div class="max-w-6xl mx-auto bg-bgclr pt-6 lg:max-w-4xl rounded-md md:max-w-xl">
            <h4 class="text-orange bg-white w-48 mx-auto text-center mb-4 rounded-full font-semibold">
              The Scripbox Promise
            </h4>
            <h2 class="text-xl max-w-md font-semibold mx-auto text-center pb-6">
              Scripbox has helped over 2500 people become millionaires in the
              last 7 years
            </h2>
            <p class="text-white bg-green w-40 mx-auto rounded-md text-center py-1 mb-2">
              Start Investing Now
            </p>
            <div class="flex lg:flex-wrap mt-10 pb-20 mb-20 justify-between mx-3 md:pb-5 md:mb-5 ">
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl ">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 39 40"
                  id="portion"
                >
                  <g clip-path="url(#eiclip0)">
                    <path
                      d="M25.502 5.745L18 21l15.255 7.502"
                      fill="#fff"
                    ></path>
                    <path
                      d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z"
                      fill="#9F7AEA"
                    ></path>
                    <path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path>
                    <path
                      d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z"
                      fill="#E7FEF8"
                    ></path>
                    <path
                      d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z"
                      fill="#11C095"
                    ></path>
                  </g>
                </svg>
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0">Fund Selection</h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    You'll never have to worry about what funds to choose. We'll
                    suggest what's best for you.
                  </p>
                </div>
              </div>
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl md:pt-10">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="cup"
                >
                  <path
                    d="M10.1 19.355H8.8a5.22 5.22 0 01-3.677-1.512 5.142 5.142 0 01-1.523-3.65V3.872h6.5M30.9 19.355h1.3a5.22 5.22 0 003.677-1.512 5.142 5.142 0 001.523-3.65V3.872h-6.5M20.5 33.548v-7.742"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M20.5 25.806a11.745 11.745 0 01-8.273-3.4A11.57 11.57 0 018.8 14.193V1.29h23.4v12.904c0 1.524-.303 3.035-.89 4.444a11.608 11.608 0 01-2.537 3.767 11.706 11.706 0 01-3.796 2.517c-1.42.584-2.94.884-4.477.884z"
                    fill="#FFE1A8"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M20.31 9.032v3.871M16.6 11.707l3.709 1.196M18.017 16.035l2.292-3.132M22.601 16.035l-2.292-3.132M24.018 11.707l-3.709 1.196"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32.2 38.71H8.8c0-1.711-.267-3.952 1.3-5.162 1.567-1.21 4.84-1.29 7.057-1.29h6.686c2.195 0 5.505.092 7.057 1.29 1.552 1.199 1.3 3.467 1.3 5.162z"
                    fill="#FFE1A8"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                </svg>{" "}
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0 ">
                    Continuous monitoring & alerts
                  </h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    We will track our recommendations and suggest changes & fund
                    exists whenever required.
                  </p>
                </div>
              </div>
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl lg:pt-10">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="archery-target"
                >
                  <g
                    clip-path="url(#anclip0)"
                    stroke="#007AFF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  >
                    <path
                      d="M16.5 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
                      fill="#fff"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M16.5 32a8 8 0 100-16 8 8 0 000 16z"
                      fill="#CBE3F6"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M16.5 25a1 1 0 100-2 1 1 0 000 2z"
                      fill="#fff"
                      stroke-linecap="square"
                    ></path>
                    <path d="M16.75 23.75l20-20"></path>
                    <path
                      d="M31.75 8.75L30.5 2.5l-5 5 1.25 6.25L33 15l5-5-6.25-1.25z"
                      fill="#CBE3F6"
                      stroke-linecap="square"
                    ></path>
                  </g>
                </svg>{" "}
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0 ">
                    All week call assistance
                  </h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    Our customer champions are available 7 days a week from 8AM
                    to 8PM.
                  </p>
                </div>
              </div>
              <div class="max-w-xs text-center md:flex md:text-left md:items-start md:max-w-4xl lg:pt-10">
                <svg
                  class="w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="savings"
                >
                  <path
                    d="M17.22 21.521c-2.03 1.988-4.648 3.086-7.36 3.086-2.711 0-5.33-1.098-7.36-3.086 1.609-1.57 3.593-2.595 5.715-2.948a10.175 10.175 0 016.245.956c1.956.978 3.614 2.56 4.777 4.555 1.163 1.996 1.78 4.32 1.777 6.695"
                    fill="#fff"
                  ></path>
                  <path
                    d="M17.22 21.521c-2.03 1.988-4.648 3.086-7.36 3.086-2.711 0-5.33-1.098-7.36-3.086 1.609-1.57 3.593-2.595 5.715-2.948a10.175 10.175 0 016.245.956c1.956.978 3.614 2.56 4.777 4.555 1.163 1.996 1.78 4.32 1.777 6.695"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M23.78 21.521c2.03 1.988 4.648 3.086 7.36 3.086 2.711 0 5.329-1.098 7.36-3.086-1.609-1.57-3.593-2.595-5.715-2.948a10.175 10.175 0 00-6.245.956c-1.956.978-3.614 2.56-4.777 4.555-1.163 1.996-1.78 4.32-1.777 6.695"
                    fill="#fff"
                  ></path>
                  <path
                    d="M23.78 21.521c2.03 1.988 4.648 3.086 7.36 3.086 2.711 0 5.329-1.098 7.36-3.086-1.609-1.57-3.593-2.595-5.715-2.948a10.175 10.175 0 00-6.245.956c-1.956.978-3.614 2.56-4.777 4.555-1.163 1.996-1.78 4.32-1.777 6.695"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M20.602 16.636a7.714 7.714 0 100-15.429 7.714 7.714 0 000 15.429z"
                    fill="#FEFCBF"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M20.602 16.893v6.685M20.602 6.607v4.629"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M8.773 28.464H32.43l-1.067 8.534a2 2 0 01-1.984 1.752H11.824a2 2 0 01-1.984-1.752l-1.067-8.534z"
                    fill="#B6F1E0"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                </svg>{" "}
                <div class="ml-4">
                  {" "}
                  <h5 class="font-semibold pt-3 md:pt-0 ">
                    Annual reviews & rebalances
                  </h5>
                  <p class="text-textgrey font-thin text-sm  pt-1">
                    We review your investments and make course corrections every
                    year to make the best out of your investments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
