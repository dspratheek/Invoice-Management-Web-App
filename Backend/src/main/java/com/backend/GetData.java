package com.backend;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
//import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
//import java.util.Calendar;
//import java.util.GregorianCalendar;

import com.google.gson.Gson;

@WebServlet("/GetData")
public class GetData extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public GetData() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try {
			

			Connection conn = MySQLConnection.getConn();

			String query = "SELECT sl_no, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id FROM winter_internship";

			PreparedStatement ps = conn.prepareStatement(query);
			ResultSet rs = ps.executeQuery(query);
			
			
			ArrayList<POJO> data = new ArrayList<>();
			while(rs.next()){
				
				POJO row = new POJO();
				
				row.setSl_no(rs.getInt("sl_no"));
				row.setBusiness_code(rs.getString("business_code"));   
				row.setCust_number(rs.getString("cust_number"));   
				row.setClear_date(rs.getString("clear_date"));   
				row.setBuisness_year(rs.getInt("buisness_year"));
				row.setDoc_id(rs.getString("doc_id"));   
				row.setPosting_date(rs.getString("posting_date"));   
				row.setDocument_create_date(rs.getString("document_create_date"));   
				row.setDue_in_date(rs.getString("due_in_date"));   
				row.setInvoice_currency(rs.getString("invoice_currency"));   
				row.setDocument_type(rs.getString("document_type"));   
				row.setPosting_id(rs.getInt("posting_id"));   
				row.setTotal_open_amount(rs.getString("total_open_amount"));   
				row.setBaseline_create_date(rs.getString("baseline_create_date"));   
				row.setCust_payment_terms(rs.getString("cust_payment_terms"));   
				row.setInvoice_id(rs.getString("invoice_id"));
				
				data.add(row);
			}
			
			Gson gson = new Gson();
			String jsonData = gson.toJson(data);
//			System.out.println(jsonData);
			
//			PrintWriter out=response.getWriter();
//			out.println(jsonData);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.addHeader("Access-Control-Allow-Methods", "*");
			response.addHeader("Access-Control-Allow-Headers", "*");
			response.getWriter().write(jsonData);
			
			conn.close();
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
}					

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
