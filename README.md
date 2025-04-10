## ⚠️ Disclaimer

This project is **strictly for educational and development purposes only**. It is **not** intended for cheating, exploiting, or violating the terms of service of osu! or any other platform. The use of this software in **online**, **ranked**, or **competitive settings** is **prohibited**. Misuse of this software may result in **account bans**, **account suspensions**, or other consequences imposed by osu! or relevant platform authorities. **Use responsibly and at your own risk.**

---

### **Important Warning:**
- **YOU WILL BE BANNED** if this software is used in any online, ranked, or tournament settings. **This tool should ONLY be used for offline, non-competitive play**.
- **READ AND UNDERSTAND THE osu! TERMS OF SERVICE (TOS)**: By using this software, you agree to fully comply with osu!’s **Terms of Service**. You must **read every last line** of the TOS and ensure you are fully informed about the platform's rules. Misuse of this software in violation of osu!’s TOS may result in immediate action taken against your osu! account, including permanent bans.

---

# Sopra

Sopra is an advanced **osu! aimbot and relax bot** designed for **development**, **research**, and **educational purposes**. This project provides insights into osu! gameplay automation, offering a detailed exploration of how automation interacts with osu!’s gameplay mechanics. **Sopra** aims to contribute to the understanding of game mechanics, AI, and automation in rhythm games.

---

## Features

- **Aimbot**: Automates precise cursor movements to accurately hit circles and sliders based on the parsed beatmap data.
- **Relax Bot**: Simulates key presses to help achieve accurate timing, making the game experience relaxed and automated.
- **Custom osu! Parsing**: Sopra uses a **custom parser** for `.osu` files, which allows for more granular data extraction and customization of beatmap interactions. This parser provides key insights into osu! mechanics for research purposes.
- **Extensible Codebase**: Modular structure for further experimentation, tweaking, and custom development.
- **Offline Use Only**: This software is designed for **offline, non-competitive** gameplay. **Do not attempt to use it in ranked or online games.**

---

## Requirements

- **Python 3.12+**
- Dependencies are listed in `requirements.txt`
- A basic understanding of osu! mechanics and gameplay is recommended

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/gothenjoya/sopra.git
    cd sopra
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the bot:
    ```bash
    python sopra.py
    ```

---

## Custom osu! Parsing

Sopra uses a **custom parser** for `.osu` files, meaning it doesn’t adhere to the default format directly. Instead, it interprets specific data differently, providing more flexibility and precision when working with osu! maps.

To understand the specific structure, refer to the `map_parser.py` file for details about how the custom format is handled.

---

## Usage

1. **Launch osu!** and start a beatmap (preferably in **offline mode**).
2. **Run the bot** and observe its behavior:
    ```bash
    python sopra.py
    ```

---

## Development

Contributions are welcome! If you'd like to improve the project or add new features, feel free to fork the repository and submit a pull request. Here's how you can contribute:

- **Bug fixes**: Help fix any issues related to aimbot or relax bot performance.
- **Improvements**: Improve algorithms for cursor movement or keypress simulation.
- **Documentation**: Contribute to better documentation, tutorials, or explanations of the codebase.

### To-Do List

- Improve the **cursor movement algorithms** for more precise and human-like interactions.
- Add support for **additional game modes** (e.g., Taiko, Mania, Catch the Beat).
- Enhance **timing accuracy** for the relax bot to make it more natural.

---

## Ethical Considerations

While **Sopra** is an educational tool, it’s crucial to respect the osu! community and its rules. Misusing this tool can harm the competitive integrity of the game, and using it in **ranked**, **tournament**, or **online** settings will result in a permanent ban from osu!.

**This software is intended for research, learning, and offline experimentation only.**

Using **Sopra** to gain unfair advantages, disrupt the experience of others, or harm the competitive nature of osu! is not acceptable. Always act responsibly when using the software.

---

## License

This project is licensed under the [MIT License](LICENSE). By using this software, you agree to the terms of this license.

---

**Note (1)**: Always test in a **controlled environment** and avoid using this software on live accounts. Never use this bot on your main account.

**Note (2)**: **I’m not responsible** for anything that happens to **your osu! account**, **osu! ranking**, **osu! score**, **osu! pp**, or **ANYTHING** that could affect **YOUR OSU! ACCOUNT IN ANY WAY POSSIBLE**.

**Note (3)**: If you use this software in **online**, **ranked**, or **tournament settings**, you **WILL** be banned by osu!’s developers or team members. **You have been warned**.

**Note (4)**: By using this software, you **MUST** read and fully understand osu!’s **Terms of Service (TOS)**. You are responsible for ensuring that your use of this software does not violate any terms, including those related to cheating, exploiting, or tampering with osu!'s gameplay or ranking system.


---