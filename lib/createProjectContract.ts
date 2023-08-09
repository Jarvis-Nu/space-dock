import abi from "../abis/abi.json"
import { ethers } from "ethers"

export default function connectProjectContract() {
  const contractAddress = "0xB5785e8327Ad3a888248e7F5470c9d85FF37559E";
  const contractABI = abi.abi;
  let rsvpContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return rsvpContract;
}
