type NavigationItem = {
    label: string,
    href: string
}

export interface HeaderProps {
    companyName: string;
    companyLogo?: string;
    navigationItems?: NavigationItem[];
}