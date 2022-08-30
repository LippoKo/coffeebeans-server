export default function EditProfile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);

  const navigate = useNavigate();
  const { storeToken, authenticateUser, user, logout } =
    useContext(AuthContext);

  const handleName = (e) => setName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email, surname, name };

    const createUser = async () => {
      try {
        let response = await axios.put(
          `${process.env.REACT_APP_API_URL}/user/profile/${user.username}/edit`,
          body
        );
        storeToken(response.data.authToken);
        authenticateUser();
        logout();
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };
    createUser();

};