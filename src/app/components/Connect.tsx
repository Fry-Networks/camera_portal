import { Provider, useWallet } from "@txnlab/use-wallet";

interface ButtonProps {
  provider: Provider;
  className?: string;
  activeAccount?: any;
}

const DisconnectButton = ({ provider, className }: ButtonProps) => (
  <button
    onClick={provider.disconnect}
    disabled={!provider.isConnected}
    className={`bg-red-500 text-white py-4 px-8 rounded ${className}`} // Using Tailwind CSS classes
  >
    Disconnect
  </button>
);

const ConnectButton = ({ provider, className }: ButtonProps) => (
  <button className={`bg-green-500 text-white py-4 px-8 rounded ${className}`} onClick={provider.connect}>
    Connect
  </button>
);

const AccountSelect = ({ provider, className, activeAccount }: ButtonProps) => (
  <select
    className={`py-4 px-8 rounded ${className}`} // Using Tailwind CSS classes
    value={activeAccount ? activeAccount.address : "Address"}
    onChange={(e) => provider.setActiveAccount(e.target.value)}
  >
    <option value="Address" disabled>Address</option>
    {provider.accounts.map((account) => (
      <option
        key={"account-" + account.address}
        value={account.address}
      >
        {account.address}
      </option>
    ))}
  </select>
);

export default function Connect() {
  const { providers, activeAccount } = useWallet();

  // Check if any provider is connected
  const anyConnected = providers?.some(provider => provider.isConnected);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center text-center px-32">
      {providers?.map((provider) => (
        (provider?.isConnected || !anyConnected) && (
          <div key={"provider-" + provider.metadata.id} className="m-4 flex flex-col items-center relative flex-auto">
            <h4 className="flex items-center justify-center">
              <img width={30} height={30} alt="" src={provider.metadata.icon} className="mr-2" />
              {provider.metadata.name} {provider.isActive && "[active]"}
            </h4>
            {!anyConnected && <ConnectButton provider={provider} className="mt-4" />}
            {provider.isConnected && provider.isActive && provider.accounts.length && (
              <AccountSelect
                provider={provider}
                className="max-w-[300px] overflow-hidden whitespace-nowrap bg-green-500 mt-2 rounded-md"
                activeAccount={activeAccount}
              />
            )}
            {provider.isConnected && <DisconnectButton provider={provider} className="mt-4" />}
          </div>
        )
      ))}
    </div>
  );
}
