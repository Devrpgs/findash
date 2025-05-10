"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Bell, CreditCard, Key, Lock, Mail, Save, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function SettingsPageContent() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    // Simulando uma requisição
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e configurações da conta</p>
      </div>

      <Tabs defaultValue="profile" className="mb-6">
        <TabsList className="grid grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="billing">Faturamento</TabsTrigger>
          <TabsTrigger value="system">Sistema</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>Atualize suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                      <AvatarFallback className="text-lg">JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Alterar foto
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nome</Label>
                        <Input id="first-name" defaultValue="João" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Sobrenome</Label>
                        <Input id="last-name" defaultValue="Silva" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao.silva@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Cargo</Label>
                      <Input id="title" defaultValue="Diretor Financeiro" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue="Profissional com mais de 10 anos de experiência em gestão financeira e análise de dados."
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancelar</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Salvar alterações"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="account" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Segurança da Conta</CardTitle>
                <CardDescription>Gerencie suas credenciais e segurança</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Lock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Alterar Senha</h4>
                        <p className="text-sm text-muted-foreground">Atualize sua senha periodicamente</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Alterar
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Key className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Autenticação de Dois Fatores</h4>
                        <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Sessões Ativas</h4>
                        <p className="text-sm text-muted-foreground">Gerencie dispositivos conectados</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Preferências de Email</CardTitle>
                <CardDescription>Gerencie como recebe emails</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Emails de Marketing</h4>
                      <p className="text-sm text-muted-foreground">Receba novidades e promoções</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Bell className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Alertas do Sistema</h4>
                      <p className="text-sm text-muted-foreground">Receba alertas importantes</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Salvar preferências"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificações</CardTitle>
              <CardDescription>Controle quais notificações você deseja receber</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Alertas Financeiros</h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-budget" className="flex-1">
                      Alertas de orçamento excedido
                    </Label>
                    <Switch id="notify-budget" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-cashflow" className="flex-1">
                      Alertas de fluxo de caixa
                    </Label>
                    <Switch id="notify-cashflow" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-transactions" className="flex-1">
                      Transações de alto valor
                    </Label>
                    <Switch id="notify-transactions" defaultChecked />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notificações do Sistema</h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-reports" className="flex-1">
                      Relatórios concluídos
                    </Label>
                    <Switch id="notify-reports" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-updates" className="flex-1">
                      Atualizações do sistema
                    </Label>
                    <Switch id="notify-updates" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-news" className="flex-1">
                      Novidades e recursos
                    </Label>
                    <Switch id="notify-news" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Canais de Notificação</h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="channel-email" className="flex-1">
                      Email
                    </Label>
                    <Switch id="channel-email" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="channel-push" className="flex-1">
                      Notificações push
                    </Label>
                    <Switch id="channel-push" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="channel-sms" className="flex-1">
                      SMS
                    </Label>
                    <Switch id="channel-sms" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Salvando..." : "Salvar preferências"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Faturamento</CardTitle>
                <CardDescription>Gerencie seus métodos de pagamento e plano</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Plano Atual</h3>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Plano Empresarial</h4>
                      <p className="text-sm text-muted-foreground">R$ 499,00/mês</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Alterar plano
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Métodos de Pagamento</h3>
                    <Button variant="outline" size="sm">
                      Adicionar
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">•••• •••• •••• 4242</h4>
                        <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Histórico de Faturas</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md">
                      <div>
                        <p className="text-sm font-medium">Fatura #INV-2025-005</p>
                        <p className="text-xs text-muted-foreground">01/05/2025 - R$ 499,00</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md">
                      <div>
                        <p className="text-sm font-medium">Fatura #INV-2025-004</p>
                        <p className="text-xs text-muted-foreground">01/04/2025 - R$ 499,00</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md">
                      <div>
                        <p className="text-sm font-medium">Fatura #INV-2025-003</p>
                        <p className="text-xs text-muted-foreground">01/03/2025 - R$ 499,00</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="system" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Sistema</CardTitle>
                <CardDescription>Personalize a aparência e comportamento do sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Select defaultValue="pt-BR">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Selecione um idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Select defaultValue="America/Sao_Paulo">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Selecione um fuso horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Sao_Paulo">Brasília (GMT-3)</SelectItem>
                      <SelectItem value="America/New_York">New York (GMT-4)</SelectItem>
                      <SelectItem value="Europe/London">London (GMT+1)</SelectItem>
                      <SelectItem value="Asia/Tokyo">Tokyo (GMT+9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">Formato de Data</Label>
                  <Select defaultValue="dd/MM/yyyy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Selecione um formato de data" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd/MM/yyyy">DD/MM/AAAA</SelectItem>
                      <SelectItem value="MM/dd/yyyy">MM/DD/AAAA</SelectItem>
                      <SelectItem value="yyyy-MM-dd">AAAA-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moeda</Label>
                  <Select defaultValue="BRL">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Selecione uma moeda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BRL">Real (R$)</SelectItem>
                      <SelectItem value="USD">Dólar (US$)</SelectItem>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme-mode">Modo Escuro</Label>
                  <Switch id="theme-mode" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Salvar configurações"}
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Categorias e Tags</CardTitle>
                <CardDescription>Gerencie categorias e tags para organizar seus dados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Categorias de Despesas</h3>
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Operacional</Badge>
                    <Badge variant="outline">Marketing</Badge>
                    <Badge variant="outline">Pessoal</Badge>
                    <Badge variant="outline">Tecnologia</Badge>
                    <Badge variant="outline">Administrativo</Badge>
                    <Badge variant="outline">Financeiro</Badge>
                    <Badge variant="outline">Impostos</Badge>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Categorias de Receitas</h3>
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Vendas</Badge>
                    <Badge variant="outline">Serviços</Badge>
                    <Badge variant="outline">Assinaturas</Badge>
                    <Badge variant="outline">Investimentos</Badge>
                    <Badge variant="outline">Royalties</Badge>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Tags</h3>
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Prioritário</Badge>
                    <Badge variant="outline">Recorrente</Badge>
                    <Badge variant="outline">Projeto A</Badge>
                    <Badge variant="outline">Projeto B</Badge>
                    <Badge variant="outline">Cliente X</Badge>
                    <Badge variant="outline">Cliente Y</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" className="gap-2">
                  <Save className="h-4 w-4" />
                  <span>Exportar configurações</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
