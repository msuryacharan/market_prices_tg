export interface MarketData {
  id: number;
  date: string;
  district: string;
  market: string;
  product: string;
  min_price: number;
  max_price: number;
  previous_day_price?: number;
  price_change_percentage?: number;
}

export interface FilterProps {
  districts: string[];
  markets: string[];
  onFilter: (district: string, market: string, date: string) => void;
}

export interface DataTableProps {
  data: MarketData[];
  onProductSelect: (product: string) => void;
  selectedProduct: string;
}

export interface HeaderProps {
  title?: string;
}

export interface FooterProps {
  year?: number;
}

export interface VisitorCounterProps {
  className?: string;
}