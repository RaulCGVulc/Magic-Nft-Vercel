import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { CoverVideo } from '../CoverVideo';

import img from '../../assets/form-video.gif'

const FormPopUp = ({ onClose }) => {

  const [formData, setFormData] = useState({
    pubKey: '',
    balance: '',
    twitter: '',
  });
  const [pubkey, setPubkey] = useState('');
  const { publicKey } = useWallet();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos recopilados, por ejemplo, enviarlos a una API.
    console.log('Form data:', formData);
    onClose(); // Cerramos el formulario al enviar los datos.
  };

  const handleConnect = async () => {
    try {
      const pubK = await publicKey?.toBase58();
      console.log(pubK)
      setFormData(data => ({ ...data, pubKey: pubK }));
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          wallet: formData.pubKey,
          balance: formData.balance,
          twitter: formData.twitter
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.log(error);
    }

  }


  const getWalletBalance = async () => {
    console.log(process.env.URL_WEB3_ENDPOINT)
    const connection = new Connection(process.env.URL_WEB3_ENDPOINT, 'confirmed');
    const pubK = await publicKey?.toBase58();
    const walletAddress = new PublicKey(pubK);

    try {
      // Fetch the balance of SOL tokens
      const balance = await connection.getBalance(walletAddress);

      console.log(balance)
      setFormData(data => ({ ...data, balance }));
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      return 0;
    }
  }




  useEffect(() => {
    if (publicKey) {
      handleConnect()
      getWalletBalance()
    }
  }, [publicKey])

  return (
    <Background onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Box>
          <CoverVideo img={img} />
        </Box>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="pubkey"
            placeholder="PubKey"
            value={formData.pubKey}
            disabled
          />
          <Input
            type="text"
            name="balance"
            placeholder="balance"
            value={formData.balance}
            disabled
          />
          <Input
            type="text"
            name="twitter"
            placeholder="Your Twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
          <SubmitButton type="submit" onClick={handleSendEmail}>SEND</SubmitButton>
        </Form>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  overflow-x: hidden;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Wrapper = styled.div`
  width: 75%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #000000;
  max-width: 500px;

  position: relative;
  @media (min-width: 1280px) {
    flex-direction: row;
    max-width: 1300px;
  }
  
`;

const Box = styled.div`
 width: 90%;
 height: 100%; display: flex;
 flex-direction: column;
 justify-content: center; align-items: center;

 @media (min-width: 1280px) {
    width: 40%;
  }
 `

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
margin-top: 15px;

  @media (min-width: 1280px) {
    width: 40%;
  }
`

const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  border-radius: 100%;
  font-size: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Input = styled.input`
color: #efefef;
  width: 100%;
  border: none;
  border-bottom: 2px white solid;
  background-color: inherit;
  padding: 12px 0;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 30px;
  border: none;
  background-color: #202020;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 25PX;

  &:hover {
    background-color: #1A1A1A;
  }
`;

export default FormPopUp;