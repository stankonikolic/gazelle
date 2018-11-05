namespace Gazelle.Core
{
    using System;

    public interface IBridge
    {
        event EventHandler<BridgeMessage> MessageReceived;

        void SendMessage(BridgeMessage message);
    }
}
