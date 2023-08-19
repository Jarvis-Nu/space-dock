import abi from "../abis/abi.json"
import { ethers } from "ethers"

export default function connectProjectContract() {
  const contractAddress = "0x12C4786927D69B28d4f86b55eA983b91fF35A1e4";
  let createProjectContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      createProjectContract = new ethers.Contract(contractAddress, abi, signer);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return createProjectContract;
}
