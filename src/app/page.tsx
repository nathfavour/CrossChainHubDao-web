"use client";

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Container, AppBar, Toolbar, Typography, Button, Card, CardContent, TextField, Box, Link } from '@mui/material';
import Web3Modal from 'web3modal';
import Image from 'next/image';

const Home = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [carbonCreditContract, setCarbonCreditContract] = useState<ethers.Contract | null>(null);
  const [marketplaceContract, setMarketplaceContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    const init = async () => {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);

      const carbonCreditAddress = '0xYourCarbonCreditContractAddress';
      const marketplaceAddress = '0xYourMarketplaceContractAddress';

      const carbonCreditAbi = [ /* ABI of CarbonCredit.sol */ ];
      const marketplaceAbi = [ /* ABI of Marketplace.sol */ ];

      const carbonCreditContract = new ethers.Contract(carbonCreditAddress, carbonCreditAbi, signer);
      const marketplaceContract = new ethers.Contract(marketplaceAddress, marketplaceAbi, signer);

      setCarbonCreditContract(carbonCreditContract);
      setMarketplaceContract(marketplaceContract);
    };

    init();
  }, []);

  
  const buyCredits = async (amount: number) => {
    if (marketplaceContract) {
      const tx = await marketplaceContract.buyCredits(amount, { value: ethers.utils.parseEther('0.1') });
      await tx.wait();
    }
  };

  const sellCredits = async (amount: number) => {
    if (marketplaceContract) {
      const tx = await marketplaceContract.sellCredits(amount);
      await tx.wait();
    }
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Cross-Chain Carbon Dao Hub</Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={4}>
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Card>
          <CardContent>
            <Typography variant="h5">Buy Carbon Credits</Typography>
            <TextField label="Amount" type="number" fullWidth margin="normal" />
            <Button variant="contained" color="primary" onClick={() => buyCredits(1)}>Buy</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Sell Carbon Credits</Typography>
            <TextField label="Amount" type="number" fullWidth margin="normal" />
            <Button variant="contained" color="secondary" onClick={() => sellCredits(1)}>Sell</Button>
          </CardContent>
        </Card>
        <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" startIcon={<Image src="https://nextjs.org/icons/vercel.svg" alt="Vercel logomark" width={20} height={20} />}>
              Join us now
            </Button>
          </Link>
          <Link href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined">Read our docs</Button>
          </Link>
        </Box>
      </Box>
      <footer style={{ display: 'flex', gap: '1rem', justifyContent: 'center', padding: '1rem' }}>
        <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          <Button startIcon={<Image src="https://nextjs.org/icons/file.svg" alt="File icon" width={16} height={16} />}>Learn</Button>
        </Link>
        <Link href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          <Button startIcon={<Image src="https://nextjs.org/icons/window.svg" alt="Window icon" width={16} height={16} />}>Examples</Button>
        </Link>
        <Link href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          <Button startIcon={<Image src="https://nextjs.org/icons/globe.svg" alt="Globe icon" width={16} height={16} />}>Go to CrosschainDaohub SDK →</Button>
        </Link>
      </footer>
    </Container>
  );
};

export default Home;








































// import { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import { Container, AppBar, Toolbar, Typography, Button, Card, CardContent, TextField } from '@mui/material';
// import Web3Modal from 'web3modal';

// const Home = () => {
//   const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
//   const [signer, setSigner] = useState<ethers.Signer | null>(null);
//   const [carbonCreditContract, setCarbonCreditContract] = useState<ethers.Contract | null>(null);
//   const [marketplaceContract, setMarketplaceContract] = useState<ethers.Contract | null>(null);

//   useEffect(() => {
//     const init = async () => {
//       const web3Modal = new Web3Modal();
//       const instance = await web3Modal.connect();
//       const provider = new ethers.providers.Web3Provider(instance);
//       const signer = provider.getSigner();
//       setProvider(provider);
//       setSigner(signer);

//       const carbonCreditAddress = '0xYourCarbonCreditContractAddress';
//       const marketplaceAddress = '0xYourMarketplaceContractAddress';

//       const carbonCreditAbi = [ /* ABI of CarbonCredit.sol */ ];
//       const marketplaceAbi = [ /* ABI of Marketplace.sol */ ];

//       const carbonCreditContract = new ethers.Contract(carbonCreditAddress, carbonCreditAbi, signer);
//       const marketplaceContract = new ethers.Contract(marketplaceAddress, marketplaceAbi, signer);

//       setCarbonCreditContract(carbonCreditContract);
//       setMarketplaceContract(marketplaceContract);
//     };

//     init();
//   }, []);

//   const buyCredits = async (amount: number) => {
//     if (marketplaceContract) {
//       const tx = await marketplaceContract.buyCredits(amount, { value: ethers.utils.parseEther('0.1') });
//       await tx.wait();
//     }
//   };

//   const sellCredits = async (amount: number) => {
//     if (marketplaceContract) {
//       const tx = await marketplaceContract.sellCredits(amount);
//       await tx.wait();
//     }
//   };

//   return (
//     <Container>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Cross-Chain Carbon Credit Marketplace</Typography>
//         </Toolbar>
//       </AppBar>
//       <Card>
//         <CardContent>
//           <Typography variant="h5">Buy Carbon Credits</Typography>
//           <TextField label="Amount" type="number" />
//           <Button onClick={() => buyCredits(1)}>Buy</Button>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardContent>
//           <Typography variant="h5">Sell Carbon Credits</Typography>
//           <TextField label="Amount" type="number" />
//           <Button onClick={() => sellCredits(1)}>Sell</Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Home;




















































// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to CrosschainDaohub SDK →
//         </a>
//       </footer>
//     </div>
//   );
// }
