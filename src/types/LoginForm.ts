export interface UseLoginReturn {
  username: string;
  password: string;
  loading: boolean;
  error: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (e: React.FormEvent) => Promise<void>;
}
