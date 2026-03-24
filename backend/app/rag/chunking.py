from langchain_text_splitters import RecursiveCharacterTextSplitter

def get_text_splitter() -> RecursiveCharacterTextSplitter:
    # We use a code-aware chunker.
    return RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        separators=[
            "\nclass ", "\ndef ", "\nfunction ", 
            "\n\n", "\n", " ", ""
        ]
    )
