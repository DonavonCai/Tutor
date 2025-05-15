import { memo } from "react";
import { getTestService } from "../services/test-service";
import { ChatForm } from "../components/ChatForm/ChatForm";

export const HomePage = memo(() => {
    getTestService();
    return <ChatForm />;
});
