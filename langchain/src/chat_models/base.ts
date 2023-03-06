import {
  AIChatMessage,
  BaseChatMessage,
  BaseLanguageModel,
  BasePromptValue,
  ChatGeneration,
  ChatResult,
  LLMCallbackManager,
  LLMResult,
} from "../schema/index.js";

const getCallbackManager = (): LLMCallbackManager => ({
  handleStart: (..._args) => {
    // console.log(args);
  },
  handleEnd: (..._args) => {
    // console.log(args);
  },
  handleError: (..._args) => {
    // console.log(args);
  },
});

const getVerbosity = () => true;

export abstract class BaseChatModel extends BaseLanguageModel {
  callbackManager: LLMCallbackManager;

  verbose: boolean;

  protected constructor(
    callbackManager?: LLMCallbackManager,
    verbose?: boolean
  ) {
    super();
    this.callbackManager = callbackManager ?? getCallbackManager();
    this.verbose = verbose ?? getVerbosity();
  }

  async generate(
    messages: BaseChatMessage[][],
    stop?: string[]
  ): Promise<LLMResult> {
    const generations: ChatGeneration[][] = [];
    for (const message of messages) {
      const result = await this._generate(message, stop);
      generations.push(result.generations);
    }
    return {
      generations,
    };
  }

  async generatePrompt(
    promptValues: BasePromptValue[],
    stop?: string[]
  ): Promise<LLMResult> {
    const promptMessages: BaseChatMessage[][] = promptValues.map(
      (promptValue) => promptValue.toChatMessages()
    );
    return this.generate(promptMessages, stop);
  }

  abstract _generate(
    messages: BaseChatMessage[],
    stop?: string[]
  ): Promise<ChatResult>;

  async call(
    messages: BaseChatMessage[],
    stop?: string[]
  ): Promise<BaseChatMessage> {
    const { generations } = await this._generate(messages, stop);
    return generations[0].message;
  }
}

export abstract class SimpleChatModel extends BaseChatModel {
  protected constructor(
    callbackManager?: LLMCallbackManager,
    verbose?: boolean
  ) {
    super(callbackManager, verbose);
  }

  abstract _call(messages: BaseChatMessage[], stop?: string[]): Promise<string>;

  async _generate(
    messages: BaseChatMessage[],
    stop?: string[]
  ): Promise<ChatResult> {
    const text = await this._call(messages, stop);
    const message = new AIChatMessage(text);
    return {
      generations: [
        {
          text: message.text,
          message,
        },
      ],
    };
  }
}